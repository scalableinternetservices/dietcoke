import { readFileSync } from 'fs'
import { PubSub } from 'graphql-yoga'
import path from 'path'
import { check } from '../../../common/src/util'
import { Candidate } from '../entities/Candidate'
import { Survey } from '../entities/Survey'
import { SurveyAnswer } from '../entities/SurveyAnswer'
import { SurveyQuestion } from '../entities/SurveyQuestion'
import { User } from '../entities/User'
import { Resolvers } from './schema.types'

export const pubsub = new PubSub()

export function getSchema() {
  const schema = readFileSync(path.join(__dirname, 'schema.graphql'))
  return schema.toString()
}

interface Context {
  user: User | null
  request: Request
  response: Response
  pubsub: PubSub
}

export const graphqlRoot: Resolvers<Context> = {
  Query: {
    self: (_, args, ctx) => ctx.user,
    survey: async (_, { surveyId }) => (await Survey.findOne({ where: { id: surveyId } })) || null,
    surveys: () => Survey.find(),
    candidates: async () => {
      const candidates = await Candidate.find()
      if (candidates.length !== 0) {
        return candidates
      }

      const candidateNames = ["Simón Zeiger", "Jonathan Garcia-Rovetta", "Steven Lara", "Jordan Tyner"]

      const newCandidates = candidateNames.map(name => {
        const candidate = new Candidate()
        candidate.name = name
        candidate.voteCount = 0
        return candidate.save()
      })

      return await Promise.all(newCandidates)
    },
    calculateWinner: async () => {
      const candidates = await Candidate.find()
      const minCandidateIds: number[] = []
      const users = await User.find()

      let max = -1
      let maxCandidate: Candidate | null = null
      let totalVoteCount = 0

      for (let i = 0; i < candidates.length; i++) {
        totalVoteCount += candidates[i].voteCount
        if (maxCandidate == null || candidates[i].voteCount > max) {
          max = candidates[i].voteCount
          maxCandidate = candidates[i]
        }
      }

      if (totalVoteCount == 0) {
        return null
      }

      if (max > totalVoteCount / 2) {
        return maxCandidate
      }

      while (minCandidateIds.length < candidates.length) {
        let min = -1
        let minCandidate: Candidate | null = null

        for (let i = 0; i < candidates.length; i++) {
          if (minCandidate == null || candidates[i].voteCount < min &&
            !minCandidateIds.includes(candidates[i].id)) {
            min = candidates[i].voteCount
            minCandidate = candidates[i]
          }
        }

        minCandidateIds.push(minCandidate!.id)

        const candidateMap: { [index: number]: number } = {}
        for (const candidate of candidates) {
          candidateMap[candidate.id] = 0
        }

        for (let i = 0; i < users.length; i++) {
          for (const id of users[i].candidateIds) {
            if (!minCandidateIds.find((candId) => (id as number) == candId)) {
              candidateMap[id]++
              break
            }
          }
        }

        for (const candidate of candidates) {
          if (candidateMap[candidate.id] > totalVoteCount / 2) {
            return candidates.find((cand) => cand.id === candidate.id)!
          }
        }
      }

      return null

    },
  },
  Mutation: {
    answerSurvey: async (_, { input }, ctx) => {
      const { answer, questionId } = input
      const question = check(await SurveyQuestion.findOne({ where: { id: questionId }, relations: ['survey'] }))

      const surveyAnswer = new SurveyAnswer()
      surveyAnswer.question = question
      surveyAnswer.answer = answer
      await surveyAnswer.save()

      question.survey.currentQuestion?.answers.push(surveyAnswer)
      ctx.pubsub.publish('SURVEY_UPDATE_' + question.survey.id, question.survey)

      return true
    },
    nextSurveyQuestion: async (_, { surveyId }, ctx) => {
      // check(ctx.user?.userType === UserType.Admin)
      const survey = check(await Survey.findOne({ where: { id: surveyId } }))
      survey.currQuestion = survey.currQuestion == null ? 0 : survey.currQuestion + 1
      await survey.save()
      ctx.pubsub.publish('SURVEY_UPDATE_' + surveyId, survey)
      return survey
    },
    increaseVoteCount: async (_, { candidateId, count }, ctx) => {
      const candidate = check(await Candidate.findOne({ where: { id: candidateId } }))
      candidate.voteCount += (count ? count : 0)
      await candidate.save()
      return true
    },
    updateUserCandidateIds: async (_, { candidateIds }, ctx) => {
      if (!ctx.user || !candidateIds) {
        return false
      }

      ctx.user.candidateIds = candidateIds
      ctx.user.save()
      return true
    },

  },
  Subscription: {
    surveyUpdates: {
      subscribe: (_, { surveyId }, context) => context.pubsub.asyncIterator('SURVEY_UPDATE_' + surveyId),
      resolve: (payload: any) => payload,
    },
  },
}
