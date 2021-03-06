import {combineReducers} from "redux";
import userReducer from './user_reducer.js';

export default combineReducers({
    usrReducer: userReducer
})