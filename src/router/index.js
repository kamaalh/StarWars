import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ROUTES from "./routes";
import Login from "../containers/login/";
import Search from "../containers/search";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Route path={ROUTES.LOGIN} exact component={Login} />
      <Route path={ROUTES.SEARCH} component={Search} />
    </BrowserRouter>
  );
};

export default AppRouter;
