/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";
import {
  ATTEMPT_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from "../actions/actionTypes";

const loginReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case ATTEMPT_LOGIN:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, isLoggedIn: true };
    case LOGIN_ERROR:
      return { ...state, isLoading: false, isLoggedIn: false };

    default:
      return state;
  }
};

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
const rootReducer = combineReducers({ login: loginReducer });
export default rootReducer;
