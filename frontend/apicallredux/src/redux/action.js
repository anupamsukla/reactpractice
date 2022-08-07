import * as types from './actionTypes'

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
