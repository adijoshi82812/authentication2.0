import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

import { Nav } from "./components/Nav/Nav";
import { LoginForm } from "./components/LoginForm/LoginForm";

export const App = () => {
  const logged_in = useSelector((state) => state.logged_in);

  return (
    <Router>
      {logged_in ? <Redirect to="/dashboard/" /> : <Redirect to="/" />}
      <Nav />
      <Switch>
        <Route exact path="/">
          <LoginForm />
        </Route>

        <Route exact path="/signup/">
          Sign Up
        </Route>

        <Route exact path="/dashboard/">
          DashBoard
        </Route>
      </Switch>
    </Router>
  );
};
