/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";
import {
  ATTEMPT_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  FETCH_PLANETS,
  FETCH_PLANETS_SUCCESS,
  FETCH_PLANETS_ERROR
} from "../actions/actionTypes";

const loginReducer = (state = {}, action) => {
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

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PLANETS:
      return { ...state, isLoading: true };
    case FETCH_PLANETS_SUCCESS:
      return { ...state, planets: action.planets };
    case FETCH_PLANETS_ERROR:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
const rootReducer = combineReducers({
  login: loginReducer,
  search: searchReducer
});
export default rootReducer;
