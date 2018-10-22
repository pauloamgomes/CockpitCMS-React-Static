import React from "react";
import { Container, Breadcrumb, BreadcrumbItem } from "reactstrap";
import styled from "styled-components";
import { NavLink } from "react-static";

const BreadcrumbStyled = styled(Breadcrumb)`
  .breadcrumb {
    background: transparent;
    padding: 0.5rem;
    margin: 0px;
  }

  .breadcrumb-item:before {
    color: rgba(255, 255, 255, 0.6);
  }

  a {
    color: white;
  }

  .active {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const ContainerStyled = styled(Container)`
  position: absolute;
  bottom: 0px;
  left: 0px;
`;

export default ({ crumbs }) => (
  <ContainerStyled fluid>
    <Container>
      <BreadcrumbStyled>
        <BreadcrumbItem>
          <NavLink exact to="/">
            Home
          </NavLink>
        </BreadcrumbItem>
        {crumbs &&
          crumbs.map((crumb, idx) => (
            <BreadcrumbItem
              key={`breadcrum-${idx}`}
              active={crumb.active || false}
            >
              {crumb.link && (
                <NavLink exact to={crumb.link}>
                  {crumb.text}
                </NavLink>
              )}
              {crumb.active && crumb.text}
            </BreadcrumbItem>
          ))}
      </BreadcrumbStyled>
    </Container>
  </ContainerStyled>
);
