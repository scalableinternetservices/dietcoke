import { useQuery } from '@apollo/client'
import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { useContext, useState } from 'react'
import { Candidate, FetchCandidates } from '../../graphql/query.gen'
import { Button } from '../../style/button'
import { Input } from '../../style/input'
import { Spacer } from '../../style/spacer'
import { UserContext } from '../auth/user'
import { AppRouteParams, getPath, PlaygroundApp, Route } from '../nav/route'
import { handleError } from '../toast/error'
import { fetchCandidates } from './fetchCandidates'
import { increaseVoteCount } from './mutateCandidate'
import { updateUserCandidateIds } from './mutateUser'
import { Page } from './Page'

interface ElectionPageProps extends RouteComponentProps, AppRouteParams { }

export function ElectionPage(props: ElectionPageProps) {
  return <Page>{getElectionApp(props.app)}</Page>
}

function getElectionApp(app?: PlaygroundApp) {
  const [userQuery, setUserQuery] = useState('')
  const { loading, data } = useQuery<FetchCandidates>(fetchCandidates)
  const [rankedCandidates, setRankedCandidates] = useState([] as number[])
  const { user } = useContext(UserContext)

  if (user) {
    function doVoteForCandidate(candidate: Candidate) {
      const id = candidate.id
      const candidateRank = rankedCandidates.indexOf(id)
      if (candidateRank == -1) {
        setRankedCandidates(rankedCandidates.concat(id))
      } else {
        const newRanks = rankedCandidates.slice()
        newRanks.splice(candidateRank, 1)
        setRankedCandidates(newRanks)
      }
    }

    async function submit() {
      if (user) {
        alert('Submitted')
        increaseVoteCount(rankedCandidates[0], 1).catch(handleError)
        updateUserCandidateIds(rankedCandidates)
      }
    }

    // Get rank for printing.
    function getRank(candidateID: number) {
      const candidateRank = rankedCandidates.indexOf(candidateID)
      if (candidateRank == -1) {
        return 'Vote'
      } else {
        return candidateRank + 1
      }
    }

    if (loading) {
      return <div>loading...</div>
    }
    if (!data || data.candidates.length === 0) {
      return <div>no candidates</div>
    }

    return (
      <div className="mw6">
        <header>
          <b>Rank Candidates in order of preference</b>
        </header>
        <p>Search for a candidate...</p>
        <Input $onChange={setUserQuery} />
        <Spacer $h4 />
        {data.candidates
          .filter(candidate => candidate.name.toLowerCase().includes(userQuery.toLowerCase()))
          .sort((a, b) => b.voteCount - a.voteCount)
          .map((candidate, i) => (
            <div key={i} className="pa3 br2 mb2 bg-black-10 flex items-center">
              <Button onClick={() => doVoteForCandidate(candidate)}>{getRank(candidate.id)}</Button>
              <Spacer $w4 />
              {candidate.name} · {candidate.voteCount}
            </div>
          ))}
        <Spacer $h4 />
        <Button onClick={() => submit()}>Submit</Button>
      </div>
    )
  } else {
    return <div> Please <a href={getPath(Route.REGISTER)}>Register or Login</a></div>
  }
}
