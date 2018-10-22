import React from "react";
import styled from "styled-components";
import { NavLink, SiteData } from "react-static";

const NavLinkStyled = styled(NavLink)`
  max-width: 200px;
  white-space: pre-wrap;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: rgb(255, 255, 255);
  font-weight: bold;
  padding: 0.3rem 0.7rem;
  border-top: 1px solid rgba(255, 255, 255, 0.8);
  border-left: 1px solid rgba(255, 255, 255, 0.8);
  border-right: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  span {
    padding: 0px;
  }
  :hover {
    text-decoration: none;
    color: rgb(255, 255, 255);
  }
`;

export default () => (
  <SiteData>
    {({ siteName }) => (
      <NavLinkStyled exact to="/">
        <span>{siteName}</span>
      </NavLinkStyled>
    )}
  </SiteData>
);
