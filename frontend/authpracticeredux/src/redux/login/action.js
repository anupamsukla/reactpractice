import * as types from './actionTypes'
import axios from 'axios'
export const loginloading = (payload) => {
  return {
    type: types.LOGINLOADING,
    payload,
  }
}

export const loginsuccess = (payload) => {
  return {
    type: types.LOGINSUCESS,
    payload,
  }
}

export const loginfailure = (payload) => {
  return {
    type: types.LOGINFAILURE,
    payload,
  }
}

export const logout = (payload) => {
  return {
    type: types.LOGOUT,
    payload,
  }
}

export const login = (payload) => (dispatch) => {
  dispatch(loginloading())
  axios
    .post('https://ecomerce101.herokuapp.com/signin', payload)
    .then((response) => {
      dispatch(loginsuccess(response.data))
    })
    .catch((error) => {
      dispatch(loginfailure(error))
    })
}
