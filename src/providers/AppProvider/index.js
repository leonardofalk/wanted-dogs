import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { New, Home } from '../../containers'

export const AppProvider = () => (
  <Switch>
    <Route path="/dogs/new" component={New} />
    <Route path="/dogs" component={Home} />
    <Route>
      <Redirect to="/dogs" />
    </Route>
  </Switch>
)
