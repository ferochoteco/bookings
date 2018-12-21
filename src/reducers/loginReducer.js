import { loginActions } from '../utils/constants';

const initialState = {
  data: [],
  loginFinished: false,
  isLoading: false,
  error: false
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginActions.LOGIN_BEGIN:
      return {
        ...state,
        data: [],
        isLoading: true,
        loginFinished: false
      }
    case loginActions.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loginFinished: true,
        data: action.payload.data
      }
    case loginActions.LOGIN_FAILURE:
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