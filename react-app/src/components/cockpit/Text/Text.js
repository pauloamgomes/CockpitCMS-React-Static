import React from "react";
import convert from "htmr";
import { NavLink } from "react-static";
import { Container } from "reactstrap";
//
import Image from "../../Image";

const transform = {
  img: node => <Image {...node} />,
  a: node => <NavLink to={node.href} {...node} />,
};

export default ({ name, text }) => (
  <Container className={`component--${name}`}>
    {text && convert(text, { transform })}
  </Container>
);
