//Import the sample data
import bookingsData from '../api/southMasajes.json';
import { bookingsActions } from '../utils/constants';

export function getBookingsData() {
    return {
        type: bookingsActions.FETCH_BEGIN
    }
}

export function getBookingsSuccess(data) {
    return {
        type: bookingsActions.FETCH_SUCCESS,
        payload: { data }
    }
}

export function getBookingsFailure(error) {
    return {
        type: bookingsActions.FETCH_FAILURE,
        payload: { error } 
    }
}
 
export function getBookingsAction(calendarId){
    return (dispatch) => {
        dispatch(getBookingsData());
        setTimeout(() => {
            console.log(calendarId);
            dispatch(getBookingsSuccess(bookingsData));
        }, 2000);
    };
}