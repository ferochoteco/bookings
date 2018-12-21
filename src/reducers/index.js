import { combineReducers } from 'redux';

import appLogin from './loginReducer';
import sitesReducer from './sitesReducer';
import navReducer from './navReducer';

const rootReducer = combineReducers({
    appLogin,
    sitesReducer,
    navReducer
});

export default rootReducer;