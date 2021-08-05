import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { NavBar, NavBarItem } from "./NavStyled";

export const Nav = () => {
  const logged_in = useSelector((state) => state.logged_in);

  const logged_out_nav = (
    <NavBar>
      <NavBarItem>
        <Link to="/">Login</Link>
      </NavBarItem>

      <NavBarItem>
        <Link to="/signup/">SignUp</Link>
      </NavBarItem>
    </NavBar>
  );

  const logged_in_nav = (
    <NavBar>
      <NavBarItem>
        <Link to="/">Logout</Link>
      </NavBarItem>
    </NavBar>
  );

  return logged_in ? logged_in_nav : logged_out_nav;
};
