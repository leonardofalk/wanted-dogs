import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { rootReducer } from '../../redux'

export const ReduxProvider = ({ children }) => {
  const store = createStore(rootReducer, applyMiddleware(logger, thunk))

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
