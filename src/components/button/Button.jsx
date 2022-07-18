import React from "react";
import { NavLink } from "react-router-dom";
import styled from "./Button.module.scss";

const Button = (props) => {
  return (
    <NavLink to={props.to} className={styled.button}>
      {props.children}
    </NavLink>
  );
};

export default Button;
