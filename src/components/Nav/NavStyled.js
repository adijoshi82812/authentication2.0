import styled from "styled-components";

export const NavBar = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

export const NavBarItem = styled.ul`
  float: ${(props) => (props.right ? "right" : "left")};

  & > a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  & > a:hover {
    background-color: #111;
  }
`;
