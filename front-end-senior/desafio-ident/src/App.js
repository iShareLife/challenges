import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import { PrivateRoute, Theme } from 'components'
import { Home } from 'views'
import { getToken, setToken, IDentClient } from 'utils'
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.module.css'

class App extends Component {

  render() {
      return ( 
        <React.Fragment>
          <CssBaseline / >
          <Theme>
            <Switch>
              <PrivateRoute path="/" exact={true} component={Home} />
            </Switch>
          </Theme>
        </React.Fragment>
    )
  }
}

export default App
