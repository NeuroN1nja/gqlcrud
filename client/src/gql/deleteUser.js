import { gql } from 'apollo-boost'
import { useMutation } from 'react-apollo'

import { GET_USERS } from './getUsers'

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      name
      email
    }
  }
`

export const useDeleteUser = ({ id, onCompleted }) => useMutation(DELETE_USER, {
  variables: {
    id,
  },
  update(cache, { data: { deleteUser: user } }) {
    const currentData = cache.readQuery({ query: GET_USERS })
    const users = currentData.users.filter((currentUser) => currentUser.id !== user.id)
    cache.writeQuery({ query: GET_USERS, data: { users } })
  },
  onCompleted,
})