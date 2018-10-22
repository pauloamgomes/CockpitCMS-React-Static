import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import { NavLink, withRouteData } from "react-static";
import styled from "styled-components";
//
import BrandLogo from "./BrandLogo";

const NavbarStyled = styled(Navbar)`
  background-color: rgb(23, 34, 60);
  padding: 1rem;
  position: absolute;
  background-color: transparent;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  z-index: 9;
  margin-top: 1rem;

  .navbar-toggler {
    border-color: rgba(255, 255, 255, 0.8);
    color: white;
    font-size: 0.8rem;
    text-transform: uppercase;
    padding: 0.4rem 0.8rem;
    .navbar-toggler-icon {
      width: 1rem;
      height: 1rem;
    }
  }

  .navbar-collapse {
    ul {
      text-align: right;
    }
  }

  .nav-item {
    a {
      color: rgba(255, 255, 255, 1);
      padding: 0.9rem 10px;
      font-weight: 400;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      font-weight: 500;
      text-transform: uppercase;
    }

    a.active {
      color: rgba(255, 255, 255, 0.8);
    }

    a:hover {
      text-decoration: none;
    }
  }
`;

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const pages = this.props.pages || [];
    return (
      <NavbarStyled expand="md">
        <Container>
          <BrandLogo />
          <NavbarToggler onClick={this.toggle}>menu</NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {pages.map(
                (page, idx) =>
                  page.menu.includes("main") && (
                    <NavItem key={`menu-${idx}`}>
                      <NavLink exact to={`/${page.slug}`}>
                        {page.title}
                      </NavLink>
                    </NavItem>
                  )
              )}
            </Nav>
          </Collapse>
        </Container>
      </NavbarStyled>
    );
  }
}

export default withRouteData(Navigation);
