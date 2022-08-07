import * as types from './actionTypes'
const initState = {
  counter: 0,
}

export const counterReducer = (state = initState, { type, payload }) => {
  const { counter } = state
  switch (type) {
    case types.ADD:
      if (counter === 0 && payload === -1) return { ...state }
      return { ...state, counter: counter + payload }
    case types.RESET:
      return { ...state, counter: 0 }
    default:
      return state
  }
}

export default counterReducer
