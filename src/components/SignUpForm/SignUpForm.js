import React from "react";

import { Container, InnerBox, InputText, Button } from "./SignUpFormStyled";

export const SignUpForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Container>
      <InnerBox>
        <h1>SignUp Form</h1>
        <form autoComplete="off">
          <label htmlFor="username">Username</label>
          <InputText
            type="text"
            id="username"
            name="username"
            value={username}
            placeholder="Choose a username"
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
            placeholder="Type a password"
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
          />

          <Button type="submit">SignUp</Button>
        </form>
      </InnerBox>
    </Container>
  );
};
