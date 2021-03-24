import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 16,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 'calc(100% - 16px)',
    },
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    marginLeft: theme.spacing(1),
  },
  errors: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    color: '#c0444a',
  },
}))

export default function UserForm({
  errorMessage,
  name,
  email,
  onChangeName,
  onChangeEmail,
  onSave,
  onRemove,
}) {
  const classes = useStyles()

  return (
    <form className={classes.root}>
      <div>
        <TextField
          value={name}
          label="Name"
          onChange={(e) => onChangeName(e.target.value)}
        />
        <TextField
          value={email}
          label="Email"
          onChange={(e) => onChangeEmail(e.target.value)}
        />
      </div>
      <div>
        <Button
          onClick={() => onSave()}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Save
        </Button>
        {onRemove && (
        <Button
          onClick={() => onRemove()}
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Remove
        </Button>
        )}
      </div>
      <div className={classes.errors}>
        {errorMessage && <Typography variant="subtitle2" component="h6">{errorMessage}</Typography>}
      </div>
    </form>
  )
}
