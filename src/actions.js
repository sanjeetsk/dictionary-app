import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "./actionTypes";

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

