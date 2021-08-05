import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store";

import { Container, InnerBox, InputText, Button } from "./LoginFormStyled";

export const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  const { loginHandler, userHandler } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleLogin = async () => {
    const authObject = {
      username: username,
      password: password,
    };

    try {
      await fetch("/auth-token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(authObject),
      })
        .then((res) => res.json())
        .then((json) => {
          if (!json.token) {
            throw new Error("Wrong Credentials");
          }

          localStorage.setItem("token", json.token);
          loginHandler(true);
          userHandler(json.user.username);
        });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Container>
      <InnerBox>
        <h1>Login Form</h1>
        <form
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <label htmlFor="username">Username</label>
          <InputText
            type="text"
            id="username"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={(e) => {
              e.preventDefault();
              setUsername(e.target.value);
            }}
            required={true}
          />

          <label htmlFor="password">Password</label>
          <InputText
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            required={true}
          />

          <Button type="submit">Login</Button>
        </form>
      </InnerBox>
    </Container>
  );
};
