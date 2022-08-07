import * as types from './actionTypes'
export const add = (payload) => {
  return {
    type: types.ADDITEMS,
    payload,
  }
}

export const remove = (payload) => {
  return {
    type: types.DELETEITEM,
    payload,
  }
}

export const reset = (payload) => {
  return {
    type: types.RESET,
    payload,
  }
}
