import { gql } from '@apollo/client'


export const fetchWinner = gql`
  query CalculateWinner {
    calculateWinner {
      id
      voteCount
      name
    }
  }
`
