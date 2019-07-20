import { takeLatest, put, call } from "redux-saga/effects";
import {
  FETCH_PLANETS,
  FETCH_PLANETS_SUCCESS,
  FETCH_PLANETS_ERROR
} from "../../actions/actionTypes";

export function* fetchPlanets() {
  try {
    const response = yield call(() => {
      return fetch("https://swapi.co/api/planets").then(data => data.json());
    });
    const planets = response.results;
    yield put({ type: FETCH_PLANETS_SUCCESS, planets });
  } catch (err) {
    yield put({ type: FETCH_PLANETS_ERROR, err });
  }
}
export default function* loginSaga() {
  yield takeLatest(FETCH_PLANETS, fetchPlanets);
}
