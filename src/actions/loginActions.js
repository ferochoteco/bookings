import { loginActions } from '../utils/constants';

const redirectTo = (screenName, nav) => {
    nav.navigate(screenName);
}

export function getLogin() {
    return {
        type: loginActions.LOGIN_BEGIN
    }
}

export function getLoginSuccess(data) {
    return {
        type: loginActions.LOGIN_SUCCESS,
        payload: { data }
    }
}

export function getLoginFailure(error) {
    return {
        type: loginActions.LOGIN_FAILURE,
        payload: { error } 
    }
}

/* export function signUp(email, password) {
    return (dispatch) => {
        dispatch(getLogin());
        createUser(email, password)
            .then((data) => {
                dispatch(getLoginSuccess(data))
            })
            .catch((error) => 
                dispatch(getLoginFailure(error))
            );
    }
}

export function login(email, password, screenName, nav) {
    return (dispatch) => {
        dispatch(getLogin());
        loginUser(email, password)
            .then((data) => {
                dispatch(getLoginSuccess(data));
                redirectTo(screenName, nav);
            })
            .catch((error) => {
                dispatch(getLoginFailure(error));
            });
    }
} */
