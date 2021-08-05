import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store";

import { Container, InnerBox, InputText, Button } from "./SignUpFormStyled";

import swal from "sweetalert";

export const SignUpForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  const { loginHandler, userHandler } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleSignUp = async () => {
    const authObject = {
      username: username,
      password: password,
    };

    try {
      await fetch("/users/user_list/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(authObject),
      })
        .then((res) => res.json())
        .then(async (json) => {
          if (!json.token) {
            throw new Error("Username already exists");
          }

          localStorage.setItem("token", json.token);
          loginHandler(true);
          userHandler(json.username);
          await swal({
            title: "Success",
            text: `Logged in as ${json.username}`,
            icon: "success",
          });
        });
    } catch (err) {
      swal({ title: "Error", text: `${err}`, icon: "error" });
    }
  };

  return (
    <Container>
      <InnerBox>
        <h1>SignUp Form</h1>
        <form
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
          }}
        >
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
            required={true}
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
            required={true}
          />

          <Button type="submit">SignUp</Button>
        </form>
      </InnerBox>
    </Container>
  );
};
