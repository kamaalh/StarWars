import React from "react";
import AppRouter from "./router";
import { GlobalStyles } from "./styles";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <AppRouter />
    </React.Fragment>
  );
};
export default App;
