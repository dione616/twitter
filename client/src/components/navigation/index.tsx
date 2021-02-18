import React from "react";
import { NavLink } from "react-router-dom";
import { NavWrapper } from "./styles";

const Navigation = () => {
  return (
    <NavWrapper>
      <NavLink to="/" /* activeClassName={s.activeLink} */>Home</NavLink>
      <NavLink to="/login" /* activeClassName={s.activeLink} */>Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </NavWrapper>
  );
};

export default Navigation;
