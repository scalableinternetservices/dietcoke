import { gql } from '@apollo/client'


export const fragmentCandidate = gql`
  fragment Candidate on Candidate {
    id
    voteCount
    name
  }
`

export const fetchCandidates = gql`
  query FetchCandidates {
    candidates {
      ...Candidate
    }
  }
  ${fragmentCandidate}
`
