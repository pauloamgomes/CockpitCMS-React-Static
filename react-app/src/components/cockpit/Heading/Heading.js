import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const ContainerStyled = styled(Container)`
  padding: 1rem 15px;
  color: rgb(96, 91, 229);
`;

export default ({ name, text, tag }) => {
  const Tag = `${tag}`;

  return (
    <ContainerStyled className={`component--${name}`}>
      <Tag>{text}</Tag>
    </ContainerStyled>
  );
};
