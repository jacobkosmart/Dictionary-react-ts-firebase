import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          {/* 여기에 App 에서 나온 Home 화면 component */}
        </Route>
        <Route exact path="/words"></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
