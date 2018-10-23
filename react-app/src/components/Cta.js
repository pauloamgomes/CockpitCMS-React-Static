import React from "react";
import { NavLink } from "react-static";
import { Button } from "reactstrap";
import styled from "styled-components";

const ButtonDarkStyled = styled(Button)`
  color: white;
  border-color: white;
  line-height: 1.5rem;

  :hover {
    background-color: rgb(22, 76, 116);
    color: rgb(96, 91, 229);
    border-color: rgba(255, 255, 255, 0.5);
  }

  a {
    color: white;
  }

  a:hover {
    text-decoration: none;
    color: white;
  }
`;

const ButtonLightStyled = styled(Button)`
  color: rgb(22, 76, 116);
  border-color: rgb(22, 76, 116);
  line-height: 1.5rem;

  :hover {
    background-color: transparent;
    color: white;
    border-color: rgba(22, 76, 116, 0.5);
  }

  a {
    color: rgb(41, 48, 97);
  }

  a:hover {
    text-decoration: none;
    color: rgb(22, 76, 116);
  }
`;

export default ({ text, url, theme }) => {
  const Tag = theme === "dark" ? ButtonDarkStyled : ButtonLightStyled;
  return (
    <Tag outline color="primary">
      <NavLink to={url}>{text}</NavLink>
    </Tag>
  );
};
