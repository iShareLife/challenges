import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import { PrivateRoute } from 'components'
import { Home } from 'views'
import { getToken, setToken, IDentClient } from 'utils'
import './App.module.css'

class App extends Component {

  render() {
    return (
        <Switch>
          <PrivateRoute path="/" exact={true} component={Home} />
        </Switch>
    )
  }
}

export default App
