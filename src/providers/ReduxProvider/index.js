import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import { rootReducer } from '../../redux'

export const ReduxProvider = ({ children }) => {
  const store = createStore(rootReducer, applyMiddleware(logger))

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
