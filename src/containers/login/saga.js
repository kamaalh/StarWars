import { takeLatest, put } from "redux-saga/effects";
import {
  ATTEMPT_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from "../../actions/actionTypes";
import AuthenticationApi from "mock-authentication-api";

export function* login(actionData) {
  const { username, password } = actionData && actionData.payload;
  try {
    const user = yield AuthenticationApi.authenticate(username, password);
    if (user) {
      yield put({ type: LOGIN_SUCCESS });
    }
  } catch (err) {
    yield put({ type: LOGIN_ERROR, err });
  }
}
export default function* loginSaga() {
  yield takeLatest(ATTEMPT_LOGIN, login);
}
