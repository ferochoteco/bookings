import { combineReducers } from 'redux';

import appLogin from './loginReducer';
import sitesReducer from './sitesReducer';
import bookingsReducer from './bookingsReducer';

const rootReducer = combineReducers({
    appLogin,
    sitesReducer,
    bookingsReducer
});

export default rootReducer;