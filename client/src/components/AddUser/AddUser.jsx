import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import UserForm from '../UserForm/UserForm'
import { useCreateUser } from '../../gql/createUser'

import Spinner from '../Spinner/Spinner'

function AddUser() {
  const history = useHistory()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createUser, { error, loading }] = useCreateUser({
    name,
    email,
    onCompleted: () => history.push('/'),
  })

  return (
    <>
      {loading && <Spinner fullScreen />}
      <UserForm
        name={name}
        email={email}
        errorMessage={error?.message}
        onChangeName={setName}
        onChangeEmail={setEmail}
        onSave={createUser}
      />
    </>
  )
}

export default AddUser
