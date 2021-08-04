import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "./store";

export const App = () => {
  const logged_in = useSelector((state) => state.logged_in);
  const username = useSelector((state) => state.username);
  const dispatch = useDispatch();

  const [localUser, setLocalUser] = React.useState("");

  const { loginHandler, userHandler } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div>
      <h1>Logged in = {logged_in ? "True" : "False"}</h1>
      <h1>Username = {username}</h1>
      <input
        type="text"
        name="username"
        value={localUser}
        onChange={(e) => {
          e.preventDefault();
          setLocalUser(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          userHandler(localUser);
        }}
      >
        Toggle Usename
      </button>
      <br />

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          loginHandler(logged_in ? false : true);
        }}
      >
        Toggle Login
      </button>
    </div>
  );
};
