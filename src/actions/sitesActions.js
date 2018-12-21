//Import the sample data
import sitesData from '../api/sites.json';
import { sitesActions } from '../utils/constants';

export function getSitesData() {
    return {
        type: sitesActions.FETCH_BEGIN
    }
}

export function getSitesSuccess(data) {
    return {
        type: sitesActions.FETCH_SUCCESS,
        payload: { data }
    }
}

export function getSitesFailure(error) {
    return {
        type: sitesActions.FETCH_FAILURE,
        payload: { error } 
    }
}
 
export function getSitesAction(){
    return (dispatch) => {
        dispatch(getSitesData());
        setTimeout(() => {
            dispatch(getSitesSuccess(sitesData));
        }, 2000);
    };
}