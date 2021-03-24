import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'

export const GET_USERS = gql`
  query($skip: Int, $limit: Int) {
    users(skip: $skip, limit: $limit) {
        id
        name
        email
    }
  }
`

export const useGetUsers = ({ skip, limit }) => useQuery(GET_USERS, {
  variables: {
    skip,
    limit,
  },
})