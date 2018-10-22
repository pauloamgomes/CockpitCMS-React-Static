import React from "react";
import { Navbar, Nav, NavItem, Container } from "reactstrap";
import styled from "styled-components";
import { NavLink } from "react-static";

const ContainerStyled = styled(Container)`
  padding: 0.25rem;
  height: 50px;
  text-align: left;

  .nav-item {
    a {
      color: rgb(23, 34, 60);
      padding: 0.9rem 10px;
      font-weight: 400;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      font-weight: 500;
      text-transform: uppercase;
    }

    a.active {
      border-bottom: 1px solid rgb(23, 34, 60);
    }

    a:hover {
      text-decoration: none;
    }
  }
`;

export default ({ page, subpages }) => (
  <ContainerStyled>
    <Nav>
      {subpages &&
        subpages.map((subpage, idx) => (
          <NavItem key={`submenu-${idx}`}>
            <NavLink exact to={`/${page.slug}/${subpage.slug}`}>
              {subpage.title}
            </NavLink>
          </NavItem>
        ))}
    </Nav>
  </ContainerStyled>
);
