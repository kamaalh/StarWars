import { ATTEMPT_LOGIN, FETCH_PLANETS } from "./actionTypes";

export const attemptLoginAction = payload => ({
  type: ATTEMPT_LOGIN,
  payload
});

export const fetchPlanetsAction = () => ({
  type: FETCH_PLANETS
});
