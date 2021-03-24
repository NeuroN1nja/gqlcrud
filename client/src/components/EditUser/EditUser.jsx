import React, { useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { useHistory, useParams } from 'react-router-dom'
import UserForm from '../UserForm/UserForm'

import Spinner from '../Spinner/Spinner'

import { useUpdateUser } from '../../gql/updateUser'
import { useGetUser } from '../../gql/getUser'
import { useDeleteUser } from '../../gql/deleteUser'

function User({ match }) {
  const history = useHistory()
  const { userId: id } = useParams()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const { loading, error, data } = useGetUser({ id, skip: !match })

  const onCompleted = () => history.push('/')

  const [updateUser, { error: updatingError }] = useUpdateUser({
    id, name, email, onCompleted,
  })

  const [deleteUser, { error: deletingError }] = useDeleteUser({
    id, onCompleted,
  })

  useEffect(() => {
    if (data?.user) {
      setName(data.user.name)
      setEmail(data.user.email)
    }
  }, [data])

  if (error) {
    return (
      <Typography
        style={{ padding: '60px' }}
        variant="subtitle2"
        component="h6"
      >
        User not found
      </Typography>
    )
  }

  return (
    <>
      {loading && <Spinner fullScreen />}
      <UserForm
        name={name}
        email={email}
        errorMessage={updatingError?.message || deletingError?.message}
        onChangeName={setName}
        onChangeEmail={setEmail}
        onSave={updateUser}
        onRemove={deleteUser}
      />
    </>
  )
}

export default User
