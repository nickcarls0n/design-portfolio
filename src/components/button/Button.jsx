import React from "react";
import { NavLink } from "react-router-dom";
import styled from "./Button.module.scss";

export const Button = (props) => {
  return (
    <NavLink to={props.to} className={styled.button}>
      {props.children}
    </NavLink>
  );
};

export const SubmitButton = (props) => {
  return (
    <button type="submit" className={styled.button}>
      {props.children}
    </button>
  );
};
