import Axios from "axios";
import {
    FETCH_POSITIONS_FALSE,
    FETCH_POSITIONS_START,
    FETCH_POSITIONS_SUCCESS,
    HANDLE_CHANGE, HANDLE_CHANGE_PHOTO,
    HANDLE_CHANGE_POSITION, NEW_USER_IS_ADDED, NEW_USER_IS_ADDED_WITH_ERROR
} from "./actionTypes";
import {phoneRegEx, emailRegEx} from '../../components/form/regex'


export function fetchNewUser(name, email, phone, position, photo) {
    let bodyFormData = new FormData();
    bodyFormData.append('position_id', position.toString());
    bodyFormData.append('name', name.toString());
    bodyFormData.append('email', email.toString());
    bodyFormData.append('phone', phone.toString());
    bodyFormData.append('photo', photo);

    return async dispatch => {
        let token = await Axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token')
            Axios({
                method: 'post',
                url: 'https://frontend-test-assignment-api.abz.agency/api/v1/users',
                data: bodyFormData,
                headers: {'Token': token.data.token }
            })
                .then((response) => {
                    dispatch(newUserIsAdded())
                })
                .catch((e) => {
                    dispatch(newUserIsAddedWithError(e))
                });
    }
}


export function fetchPositions() {
    return async dispatch => {
        dispatch(fetchPositionsStart());
        try {
            const response = await Axios.get(
                'https://frontend-test-assignment-api.abz.agency/api/v1/positions');
            const positions = response.data.positions;
            dispatch(fetchPositionsSuccess(positions))
        } catch (e) {
            dispatch(fetchPositionsFalse(e))
        }
    }
}


export function handleChange(e, name) {
    let hasError;
    return dispatch => {
        if (name === 'name') {
            hasError = e.target.value.length < 2 || e.target.value.length > 60;
            dispatch(handleChangeInputs(e, name, hasError))
        }
        if (name === 'email') {
            let val = e.target.value;
            hasError = !emailRegEx.test(val);
            dispatch(handleChangeInputs(e, name, hasError))
        }
        if (name === 'phone') {
            let val = e.target.value;
            hasError = !phoneRegEx.test(val);
            dispatch(handleChangeInputs(e, name, hasError))
        }
        if (e.target.type === 'radio') {
            dispatch(handleChangeRadio(e))
        }
        if (e.target.type === 'file') {
            let fileErrors = [];
            if (e.target.files.length !== 0) {
                let maxFileSize = 5 * 1000 * 1000;
                let file = e.target;
                if (file.files[0].type !== 'image/jpeg') {
                    fileErrors.push('The photo format must be jpeg/jpg type')
                } else if (file.files[0].size > maxFileSize) {
                    fileErrors.push('The photo size must not be greater than 5 Mb')
                }
                hasError = !(fileErrors.length === 0);
                dispatch(handleChangePhoto(e, fileErrors, hasError))
            } else if (e.target.files.length === 0) {
                dispatch(handleChangePhoto(e, [], hasError = true))
            }
        }
    }
}


function newUserIsAddedWithError(e) {
    debugger
    return {
        type: NEW_USER_IS_ADDED_WITH_ERROR,
        e
    }
}


function newUserIsAdded() {
    return {
        type: NEW_USER_IS_ADDED
    }
}


function handleChangeInputs(e, name, hasError) {
    return {
        type: HANDLE_CHANGE,
        e,
        name,
        hasError
    }
}

function handleChangeRadio(e) {

    return {
        type: HANDLE_CHANGE_POSITION,
        e
    }
}

function handleChangePhoto(e, fileErrors = [], hasError) {
    return {
        type: HANDLE_CHANGE_PHOTO,
        e,
        fileErrors,
        hasError
    }
}


function fetchPositionsStart() {
    return {
        type: FETCH_POSITIONS_START
    }
}

function fetchPositionsSuccess(positions) {
    return {
        type: FETCH_POSITIONS_SUCCESS,
        positions
    }
}

function fetchPositionsFalse(error) {
    return {
        type: FETCH_POSITIONS_FALSE,
        error
    }
}
