import * as types from './actionTypes'

const intialstate = {
  loading: false,
  data: [],
  error: '',
}

const reducer = (state = intialstate, { type, payload }) => {
  switch (type) {
    case REQUEST:
      return {
        ...state,
        loading: true,
      }
    case SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        data: payload,
      }
    case FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      }
  }
}

const getusers = () => {
  return function (dispatch) {
    dispatch(request())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((el) => {
        dispatch(success(el.data))
      })
      .catch((el) => {
        dispatch(failure(el.message))
      })
  }
}
