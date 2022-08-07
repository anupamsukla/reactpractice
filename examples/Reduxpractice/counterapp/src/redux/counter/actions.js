import * as types from './actionTypes'
export const add = (payload) => {
  return {
    type: types.ADD,
    payload,
  }
}

export const reset = (payload) => {
  return {
    type: types.RESET,
    payload,
  }
}
