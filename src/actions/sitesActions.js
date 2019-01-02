//Import the sample data
import { sitesActions } from '../utils/constants';
import { getLocations } from '../api/api';

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
        getLocations()
            .then((data) => {
                dispatch(getSitesSuccess(data))
            })
            .catch((error) => 
                dispatch(getSitesFailure(error))
            );
    }
}