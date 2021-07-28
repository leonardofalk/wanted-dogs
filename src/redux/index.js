import { combineReducers } from 'redux'
import { reducer as dogsReducer } from './reducers/dogs'

export const rootReducer = combineReducers({
  dogsReducer,
})
