import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const ContainerStyled = styled(Container)`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const Hr = styled.hr`
  border: 0;
  height: 1px;
  background: rgb(130, 83, 221);
  background-image: linear-gradient(
    to right,
    rgb(130, 83, 221),
    rgb(88, 83, 208),
    rgb(130, 83, 221)
  );
`;

export default ({ name, className }) => (
  <ContainerStyled className={`component--${name}`}>
    <Hr className={className} />
  </ContainerStyled>
);
