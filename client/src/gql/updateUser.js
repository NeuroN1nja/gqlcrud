import { gql } from 'apollo-boost'
import { useMutation } from 'react-apollo'

export const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      name
      email
    }
  }
`

export const useUpdateUser = ({
  id, name, email, onCompleted,
}) => useMutation(UPDATE_USER, {
  variables: {
    id,
    input: {
      name,
      email,
    },
  },
  onCompleted,
})