import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const ContainerStyled = styled(Container)`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export default ({ name }) => (
  <ContainerStyled className={`component--${name}`}>
    <h2>Contact Form</h2>
  </ContainerStyled>
);
