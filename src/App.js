import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./store";

import { Nav } from "./components/Nav/Nav";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { SignUpForm } from "./components/SignUpForm/SignUpForm";

export const App = () => {
  const logged_in = useSelector((state) => state.logged_in);
  const username = useSelector((state) => state.username);
  const dispatch = useDispatch();

  const { loginHandler, userHandler } = bindActionCreators(
    actionCreators,
    dispatch
  );

  React.useEffect(() => {
    if (logged_in) {
      const fetchData = async () => {
        try {
          await fetch("/users/current_user/", {
            headers: {
              Authorization: `JWT ${localStorage.getItem("token")}`,
            },
          })
            .then((res) => res.json())
            .then((json) => {
              if (!json.username) {
                localStorage.removeItem("token");
                loginHandler(false);
                userHandler("");
                throw new Error("Something went wrong");
              }

              userHandler(json.username);
            });
        } catch (err) {
          alert(err);
        }
      };

      fetchData();
    }
  }, [logged_in, loginHandler, userHandler]);

  return (
    <Router>
      {logged_in ? <Redirect to="/dashboard/" /> : <Redirect to="/" />}
      <Nav />
      <Switch>
        <Route exact path="/">
          <LoginForm />
        </Route>

        <Route exact path="/signup/">
          <SignUpForm />
        </Route>

        <Route exact path="/dashboard/">
          {username}
        </Route>
      </Switch>
    </Router>
  );
};
