import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  row: {
    cursor: 'pointer',
  },
})

export default function AcccessibleTable({ users }) {
  const classes = useStyles()
  const history = useHistory()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <caption />
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow className={classes.row} onClick={() => history.push(`/${user.id}`)} key={user.id}>
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="right">{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
