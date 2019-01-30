import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Login from '../Login'
import Search from '../Search'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/search' component={Search} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
