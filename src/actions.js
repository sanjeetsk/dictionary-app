import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, ADD_TO_HISTORY, CLEAR_HISTORY, CLEAR_ERROR} from "./actionTypes";

// action creator function
export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST
})

export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
})

export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error
})


export const addToHistory = (word) => ({
    type: ADD_TO_HISTORY,
    payload: word,
});

export const clearHistory = () => ({
    type: CLEAR_HISTORY,
});

export const clearError = () => ({
    type: CLEAR_ERROR,
});



