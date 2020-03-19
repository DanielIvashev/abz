import {
    FETCH_USERS_ERROR,
    FETCH_USERS_START,
    FETCH_USERS_SUCCESS,
    GET_STATUS_NOT_FOUND,
    PLUS_NEW_USERS
} from "../actions/actionTypes";

const initialState = {
    users: [],
    loading: false,
    error: '',
    notFound: false,
    numberOfPage: 1,
};

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS_START:
            return {
                ...state, loading: true
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state, users: action.users, loading: false, numberOfPage: state.numberOfPage + 1
            };
        case PLUS_NEW_USERS:
            let arr = [...state.users];
            action.users.forEach(elem => {
                arr.push(elem)
            });
            return {
                ...state, users: arr, loading: false, numberOfPage: state.numberOfPage + 1
            };
        case GET_STATUS_NOT_FOUND:
            return {
                ...state, loading: false, error: action.error, notFound: true
            };

        case FETCH_USERS_ERROR:
            return {
                ...state, loading: false, notFound: true, error: action.error
            };

        default:
            return state
    }
}

