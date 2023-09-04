import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, ADD_TO_HISTORY, CLEAR_HISTORY, CLEAR_ERROR } from "./actionTypes";

import { combineReducers } from "redux";

const initialState = {
    loading: true,
    data: [],
    error: "",
    history: [],
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,  //to show that the request is done and we can display the result of it in our UI
                data: action.payload,
            }

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                data:[],
                error: action.payload,
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: "", // Clear the error when explicitly requested
            };


        default:
            return state

    }
}

const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_HISTORY:
            return {
                ...state,
                history: [action.payload, ...state.history],
            };
        case CLEAR_HISTORY:
            return {
                ...state,
                history: [],
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    data: dataReducer,
    history: historyReducer,
})

export default rootReducer;