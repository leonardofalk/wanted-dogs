import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { New, Home } from '../../containers'

export const AppProvider = () => (
  <Switch>
    <Route exact path="/dogs/new" component={New} />
    <Route path="/dogs" component={Home} />
  </Switch>
)
