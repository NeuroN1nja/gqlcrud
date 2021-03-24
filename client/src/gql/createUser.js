import { gql } from 'apollo-boost'
import { useMutation } from 'react-apollo'

import { GET_USERS } from './getUsers'

export const CREATE_USER = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      email
    }
  }
`

export const useCreateUser = ({ name, email, onCompleted }) => useMutation(CREATE_USER, {
  variables: {
    input: {
      name,
      email,
    },
  },
  update(cache, { data: { createUser: user } }) {
    const currentData = cache.readQuery({ query: GET_USERS })
    const users = [...currentData.users, user]
    cache.writeQuery({ query: GET_USERS, data: { users } })
  },
  onCompleted,
})