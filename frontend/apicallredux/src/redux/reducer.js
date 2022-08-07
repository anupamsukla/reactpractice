import * as types from './actionTypes'

const intialstate = {
  loading: false,
  data: [],
  error: '',
}

export const apireducer = (state = intialstate, { type, payload }) => {
  switch (type) {
    case types.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        data: payload,
      }
    case types.FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}
