import React from "react";
import { useSelector } from "react-redux";

import { Container, InnerBox } from "./DashBoardStyled";

export const DashBoard = () => {
  const username = useSelector((state) => state.username);

  return (
    <Container>
      <InnerBox>
        <h1>Welcome {username}</h1>
      </InnerBox>
    </Container>
  );
};
