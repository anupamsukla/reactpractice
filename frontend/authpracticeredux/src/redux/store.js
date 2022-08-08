import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from 'redux'
import thunk from 'redux-thunk'
import loginreducer from './login/reducer'

const rootReducer = combineReducers({ logindata: loginreducer })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
)
