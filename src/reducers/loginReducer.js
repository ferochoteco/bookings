import { LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../utils/constants';

const initialState = {
  data: [],
  loginFinished: false,
  isLoading: false,
  error: false
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_BEGIN:
      return {
        ...state,
        data: [],
        isLoading: true,
        loginFinished: false
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loginFinished: true,
        data: action.payload.data
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        loginFinished: true,
        error: action.payload.error
      }
    default:
      return state
  }
}

export default loginReducer;