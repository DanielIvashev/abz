import {
    FETCH_USERS_ERROR,
    FETCH_USERS_START,
    FETCH_USERS_SUCCESS,
    GET_STATUS_NOT_FOUND,
    PLUS_NEW_USERS
} from "./actionTypes";
import Axios from "axios";


export function fetchUsers(numberOfPage = 1, flag = false) {
    return async dispatch => {
        dispatch(fetchUsersStart());
        try {
            const response = await Axios.get(
                'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=' + numberOfPage + '&count=6');
            const users = response.data.users;
            let status = response.status;
            if (status === 404) {
                dispatch(getStatus())
            }
            if (flag) {
                dispatch(fetchUsersSuccess(users))
            } else if (!flag) {
                dispatch(plusNewUser(users))
            }
        } catch (e) {
            debugger
            dispatch(fetchUsersError(e))
        }
    }
}


export function fetchUsersStart() {
    return {
        type: FETCH_USERS_START
    }
}

export function fetchUsersSuccess(users) {
    return {
        type: FETCH_USERS_SUCCESS,
        users
    }
}

export function fetchUsersError(e) {
    return {
        type: FETCH_USERS_ERROR,
        error: e
    }
}

export function plusNewUser(users) {
    return {
        type: PLUS_NEW_USERS,
        users
    }
}

export function getStatus() {
    return {
        type: GET_STATUS_NOT_FOUND,
    }
}