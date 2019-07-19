import { all } from "redux-saga/effects";
import loginSaga from "../containers/login/saga.js";
import searchSaga from "../containers/search/saga.js";
import isFunction from "lodash/fp/isFunction";

export const runSagas = sagas => {
  if (Array.isArray(sagas)) {
    return sagas.map(saga => saga());
  }

  if (isFunction(sagas)) {
    return Array.of(sagas());
  }

  throw new TypeError(`${sagas} should be an Array or Function`);
};

export default function* rootSaga() {
  const allSagas = [...runSagas([loginSaga, searchSaga])];
  yield all(allSagas);
}
