import { bookingsActions } from '../utils/constants';

const initialState = {
  data: [],
  loading: false,
  error: false
}

const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case bookingsActions.FETCH_BEGIN:
      return {
        ...state,
        loading: true
      }
    case bookingsActions.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      }
    case bookingsActions.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    default:
      return state
  }
}

export default bookingsReducer;