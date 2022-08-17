import * as types from './actionTypes'
import axios from 'axios'

export const loading = (payload) => {
  return {
    type: types.REQUEST,
    payload,
  }
}

export const success = (payload) => {
  return {
    type: types.SUCCESS,
    payload,
  }
}

export const failure = (payload) => {
  return {
    type: types.FAILURE,
    payload,
  }
}

export const getusers = () => (dispatch) => {
  dispatch(loading())
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((r) => dispatch(success(r.data)))
    .catch((error) => dispatch(failure(error.data)))
}
