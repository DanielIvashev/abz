import {
    FETCH_POSITIONS_FALSE,
    FETCH_POSITIONS_START,
    FETCH_POSITIONS_SUCCESS,
    HANDLE_CHANGE, HANDLE_CHANGE_PHOTO, HANDLE_CHANGE_POSITION, NEW_USER_IS_ADDED, NEW_USER_IS_ADDED_WITH_ERROR
} from "../actions/actionTypes";

const initialState = {
    email: {
        value: '',
        hasError: false
    },
    name: {
        value: '',
        hasError: false
    },
    phone: {
        value: '',
        hasError: false
    },
    position: [],
    currentPosition: '',
    photo: {
        value: [],
        errors: []
    },
    loading: false,
    error: true,
    newUserIsAdded: false,
    errorWithAddingUsers: ''
};

export default function formBlockReducer(state = initialState, action) {
    switch (action.type) {
        case HANDLE_CHANGE:
            return {
                ...state, [action.name]: {
                    value: [action.e.target.value],
                    hasError: [action.hasError],
                }, error: action.hasError,
                newUserIsAdded: false
            };
        case HANDLE_CHANGE_PHOTO:
            if (action.e.target.files.length === 0) {
                return {
                    ...state, photo: {
                        value: action.e.target.files.length,
                        errors: action.fileErrors
                    }, error: action.hasError,
                    newUserIsAdded: false
                }
            } else {
                return {
                    ...state, photo: {
                        value: action.e.target.files[0],
                        errors: action.fileErrors
                    }, error: action.hasError,
                    newUserIsAdded: false
                }
            }
        case HANDLE_CHANGE_POSITION:
            return {
                ...state, currentPosition: action.e.currentTarget.value, newUserIsAdded: false
            };
        case FETCH_POSITIONS_START:
            return {
                ...state, loading: true, newUserIsAdded: false
            };
        case FETCH_POSITIONS_SUCCESS:
            return {
                ...state, loading: false, position: action.positions, newUserIsAdded: false
            };
        case FETCH_POSITIONS_FALSE:
            return {
                ...state, loading: false, error: action.error, newUserIsAdded: false
            };
        case NEW_USER_IS_ADDED:
            return {
                ...state, newUserIsAdded: true,
                email: {value: '', hasError: false},
                name: {value: '', hasError: false},
                phone: {value: '', hasError: false},
                currentPosition: '',
                photo: {
                    value: [],
                    errors: []
                }
            };
        case NEW_USER_IS_ADDED_WITH_ERROR:
            return {
                ...state, errorWithAddingUsers: action.e.response.data.message, newUserIsAdded: false
            };

        default:
            return state
    }
}
