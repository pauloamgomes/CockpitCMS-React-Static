import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import Highlight from "react-highlight.js";

const ContainerStyled = styled(Container)`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const HighlightStyled = styled(Highlight)`
  code {
    border: 1px solid rgb(225, 225, 225);
    font-size: 0.8rem;
  }
`;

export default ({ name, code, language }) => (
  <ContainerStyled className={`component--${name}`}>
    <link
      rel="stylesheet"
      href="https://highlightjs.org/static/demo/styles/github.css"
    />
    <HighlightStyled language={language}>{code}</HighlightStyled>
  </ContainerStyled>
);
