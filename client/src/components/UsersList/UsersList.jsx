import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import { Route, useHistory } from 'react-router-dom'
import unionBy from 'lodash/unionBy'

import UsersTable from './UsersTable'
import User from '../EditUser/EditUser'
import Spinner from '../Spinner/Spinner'
import AddUser from '../AddUser/AddUser'
import { useGetUsers } from '../../gql/getUsers'

const DEFAULT_ROWS_COUNT = 5

const UUID = '[0-9a-z]{24}'

const useStyles = makeStyles({
  button: {
    marginRight: 20,
    marginTop: 20,
  },
})

function UsersList() {
  const classes = useStyles()
  const history = useHistory()
  const [page, setPage] = useState(0)
  const [isLoadMoreDisabled, setIsLoadMoreDisabled] = useState(false)

  const {
    loading, error, data, fetchMore,
  } = useGetUsers({
    skip: 0,
    limit: DEFAULT_ROWS_COUNT,
  })

  const onLoadMore = () => {
    const newOffset = page + 1

    setPage(newOffset)

    fetchMore({
      variables: {
        skip: newOffset * DEFAULT_ROWS_COUNT,
        limit: DEFAULT_ROWS_COUNT,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev
        return {
          ...prev,
          users: unionBy(prev.users, fetchMoreResult.users, 'id'),
        }
      },
    }).then((res) => {
      if (res.data.users.length < DEFAULT_ROWS_COUNT) {
        setIsLoadMoreDisabled(true)
      }
    })
  }

  if (loading) {
    return (
      <Spinner />
    )
  }

  if (error) return <div>Error:</div>

  return (
    <>
      <UsersTable users={data.users} />
      <Button
        onClick={() => history.push('/addUser')}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Add user
      </Button>
      <Button
        onClick={onLoadMore}
        variant="outlined"
        color="primary"
        className={classes.button}
        disabled={isLoadMoreDisabled}
      >
        Load More
      </Button>
      <Route
        path={`/:userId(${UUID})`}
      >
        {({ match }) => (
          <Dialog
            onClose={
              history.action === 'POP'
                ? () => history.push('/')
                : history.goBack
            }
            open={Boolean(match)}
          >
            <User match={match} />
          </Dialog>
        )}
      </Route>
      <Route
        path="/addUser"
      >
        {({ match }) => (
          <Dialog
            onClose={
              history.action === 'POP'
                ? () => history.push('/')
                : history.goBack
            }
            open={Boolean(match)}
          >
            <AddUser />
          </Dialog>
        )}
      </Route>
    </>
  )
}

export default UsersList
