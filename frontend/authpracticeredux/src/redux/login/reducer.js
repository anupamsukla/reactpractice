import * as types from './actionTypes'

const initstate = {
  loading: false,
  token: false,
  error: false,
  username: false,
}

const loginreducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case types.LOGINLOADING:
      return {
        ...state,
        loading: true,
      }
    case types.LOGINSUCESS:
      return {
        ...state,
        token: payload.token,
        username: payload.user.email,
        loading: false,
      }
    case types.LOGINFAILURE:
      return {
        ...state,
        error: true,
      }
    case types.LOGOUT:
      return {
        ...state,
        username: false,
      }

    default:
      return { ...state }
  }
}

export default loginreducer
