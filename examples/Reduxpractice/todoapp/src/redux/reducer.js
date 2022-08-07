import * as types from './actionTypes'
const initState = {
  data: [1, 2, 3, 4, 5],
}

const todoReducer = (state = initState, { type, payload }) => {
  const { data } = state
  switch (type) {
    case types.ADDITEMS:
      let temp = [...data]
      return { ...state, data: [...temp, payload] }

    case types.DELETEITEM:
      let temp1 = [...data].filter((el, id) => id !== payload)
      return { ...state, data: [...temp1] }
    case types.RESET:
      return { ...initState }
    default:
      return state
  }
}

export default todoReducer
