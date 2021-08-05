import React from "react";

import { Container, InnerBox, InputText, Button } from "./LoginFormStyled";

export const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Container>
      <InnerBox>
        <h1>Login Form</h1>
        <form autoComplete="off">
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
          />

          <Button type="submit">Login</Button>
        </form>
      </InnerBox>
    </Container>
  );
};
