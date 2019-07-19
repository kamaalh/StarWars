/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducer";
import rootSaga from "../sagas";

const configureStore = (initialState = {}) => {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // Create the store with middleware
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );
  // then run the saga
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
