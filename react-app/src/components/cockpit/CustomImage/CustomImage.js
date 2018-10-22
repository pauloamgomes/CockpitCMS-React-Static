import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
//
import { getImageStyleUrl } from "../../../cockpit/utils";

const Image = styled.img`
  width: 100%;
`;

export default ({ name, title, asset, style }) => (
  <Container className={`component--${name}`}>
    <Image src={getImageStyleUrl(style, asset)} alt={title} />
  </Container>
);
