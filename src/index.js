import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./app";
import configureStore from "./store";
import AuthenticationApi from "mock-authentication-api";
import mock from "./utils/mock-authentication.json";

AuthenticationApi.configure(mock.netWorkLatency, mock.userStore);
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
