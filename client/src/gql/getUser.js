import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'

export const GET_USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`

export const useGetUser = ({ id, skip }) => useQuery(GET_USER, {
  variables: {
    id,
  },
  skip,
})