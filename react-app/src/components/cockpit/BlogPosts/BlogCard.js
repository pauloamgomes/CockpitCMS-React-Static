import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { NavLink } from "react-static";
import styled from "styled-components";
//

const CardStyled = styled(Card)`
  margin-bottom: 2rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);

  h5 {
    min-height: 2.5rem;
  }

  img {
    height: 180px;
    max-width: 100%;
    max-height: 170px;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;

    :hover {
      opacity: 0.9;
      -moz-transform: scale(1.2);
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }
`;

const Summary = styled(CardText)`
  font-size: 0.9rem;

  overflow: hidden;
  position: relative;
  line-height: 1.2rem;
  max-height: 3.8rem;
  min-height: 3.8rem;
  :after {
    content: "";
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 70%;
    height: 1.2em;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 50%
    );
  }
`;

const Zoom = styled.div`
  overflow: hidden;
`;

const NavLinkStyled = styled(NavLink)`
  color: #444;
  font-weight: 200;
  :hover {
    text-decoration: none;
    color: black;
  }
`;

const CardTitleStyled = styled(CardTitle)`
  font-size: 1.1rem;
`;

export default ({ image, title, text, link }) => (
  <NavLinkStyled to={link}>
    <CardStyled>
      <Zoom>
        {image && <CardImg top width="100%" src={image} alt={title} />}
      </Zoom>
      <CardBody>
        <CardTitleStyled>{title}</CardTitleStyled>
        <Summary>{text}</Summary>
        <CardText>
          <small className="text-muted">Last updated 3 mins ago</small>
        </CardText>
      </CardBody>
    </CardStyled>
  </NavLinkStyled>
);
