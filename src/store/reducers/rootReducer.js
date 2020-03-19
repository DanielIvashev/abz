import {combineReducers} from "redux";
import usersReducer from "./users";
import formBlockReducer from "./formBlock";


export default combineReducers({
    users: usersReducer,
    formBlock: formBlockReducer
})