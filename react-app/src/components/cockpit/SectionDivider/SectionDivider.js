import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

import Cta from "../../Cta";

const ContainerStyled = styled(Container)`
  height: auto;
  max-height: 200px;
  position: relative;
  background: center 0px no-repeat,
    linear-gradient(rgb(27, 68, 112), rgb(18, 53, 101));
  background-repeat: no-repeat;
  background-position: center 0px;
  padding: 2rem 0;
  margin: 3rem 0;

  h1 {
    color: rgb(255, 255, 255);
    font-size: 2.25rem;
    text-align: left;
    line-height: 1.25;
    letter-spacing: 0.1em;
    font-weight: 600;
    margin: 0px;
    text-transform: lowercase;
  }

  h2 {
    font-size: 1rem;
    max-width: 32rem;
    text-align: left;
    line-height: 1.5;
    letter-spacing: 0.1em;
    color: rgb(255, 255, 255);
    margin-left: initial;
    margin-right: initial;
  }

  button {
    margin-top: 1.2rem;
  }
`;

export default ({ name, title, subtitle, linktext, linkurl }) => (
  <ContainerStyled className={`component--${name}`} fluid>
    <Container>
      <Row>
        <Col sm="10">
          <h1>{title}</h1>
          {subtitle && <h2>{subtitle}</h2>}
        </Col>
        <Col sm="2">
          <Cta text={linktext} url={linkurl} theme="dark" />
        </Col>
      </Row>
    </Container>
  </ContainerStyled>
);
