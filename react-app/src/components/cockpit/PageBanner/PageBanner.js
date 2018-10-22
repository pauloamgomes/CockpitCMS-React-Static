import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import Breadcrumb from "../../Breadcrumb";

const ContainerStyled = styled(Container)`
  position: relative;
  max-height: 500px;
  background: center 0px no-repeat,
    linear-gradient(rgb(27, 68, 112), rgb(18, 53, 101));
  background-repeat: no-repeat;
  background-position: center 0px;
  padding: 4rem 3rem;
  margin-bottom: 1rem;

  .container {
    padding-top: 3rem;
  }

  h1 {
    color: rgb(255, 255, 255);
    font-size: 2.25rem;
    text-align: left;
    line-height: 1.25;
    letter-spacing: 0.05em;
    font-weight: 600;
    margin: 0px;
    text-transform: uppercase;
    padding-left: 0.5rem;
  }

  p {
    font-size: 1rem;
    max-width: 32rem;
    text-align: left;
    line-height: 1.5;
    letter-spacing: 0.1em;
    color: rgb(255, 255, 255);
    margin-left: initial;
    margin-right: initial;
    padding-left: 0.5rem;
  }
`;

export default ({ name, title, summary }) => (
  <ContainerStyled className={`component--${name}`} fluid>
    <Container>
      <h1>{title}</h1>
      {summary && <p>{summary}</p>}
    </Container>
    <Breadcrumb crumbs={[{ text: title, active: true }]} />
  </ContainerStyled>
);
