import { gql } from '@apollo/client'
import { getApolloClient } from '../../graphql/apolloClient'
import { UpdateUserCandidateIds, UpdateUserCandidateIdsVariables } from '../../graphql/query.gen'

const updateUserCandidateIdsMutation = gql`
  mutation UpdateUserCandidateIds($candidateIds: [Int!]!) {
    updateUserCandidateIds(candidateIds: $candidateIds)
  }
`

export function updateUserCandidateIds(candidateIds: number[]) {
  return getApolloClient().mutate<UpdateUserCandidateIds, UpdateUserCandidateIdsVariables>({
    mutation: updateUserCandidateIdsMutation,
    variables: { candidateIds },
  })
}