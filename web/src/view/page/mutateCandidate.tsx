import { gql } from '@apollo/client'
import { getApolloClient } from '../../graphql/apolloClient'
import { IncreaseVoteCount, IncreaseVoteCountVariables } from '../../graphql/query.gen'

const increaseVoteCountMutation = gql`
  mutation IncreaseVoteCount($id: Int!, $count: Int!) {
    increaseVoteCount(candidateId: $id, count: $count)
  }
`

export function increaseVoteCount(id: number, count: number) {
  return getApolloClient().mutate<IncreaseVoteCount, IncreaseVoteCountVariables>({
    mutation: increaseVoteCountMutation,
    variables: { id, count },
  })
}