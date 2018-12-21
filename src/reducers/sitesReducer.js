import { sitesActions } from '../utils/constants';

const initialState = {
  data: [],
  loading: false,
  error: false
}

const sitesReducer = (state = initialState, action) => {
  switch (action.type) {
    case sitesActions.FETCH_BEGIN:
      return {
        ...state,
        loading: true
      }
    case sitesActions.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      }
    case sitesActions.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    default:
      return state
  }
}

export default sitesReducer;