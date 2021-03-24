import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  spinner: {
    display: 'flex',
    justifyContent: 'center',
  },
  fullScreen: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: 1,
    alignItems: 'center',
  },
})

export default function Spinner({ fullScreen }) {
  const styles = useStyles()

  return (
    <div className={`${fullScreen && styles.fullScreen} ${styles.spinner}`}>
      <CircularProgress />
    </div>
  )
}