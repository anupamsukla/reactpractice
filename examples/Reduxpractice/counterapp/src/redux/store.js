import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from 'redux'
import thunk from 'redux-thunk'
import counterReducer from './counter/reducer'

const rootReducer = combineReducers({ counterdata: counterReducer })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
)
