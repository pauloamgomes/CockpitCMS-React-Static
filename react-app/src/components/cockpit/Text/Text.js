import React from "react";
import convert from "htmr";
import { Container } from "reactstrap";
//
import Image from "../../Image";

const transform = {
  img: node => <Image {...node} />,
};

export default ({ name, text }) => (
  <Container className={`component--${name}`}>
    {text && convert(text, { transform })}
  </Container>
);
