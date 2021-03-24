import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import UsersList from './components/UsersList/UsersList'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <UsersList />
        </Route>
      </Switch>
    </Router>
  )
}
export default App
