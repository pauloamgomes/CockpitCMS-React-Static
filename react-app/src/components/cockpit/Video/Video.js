import React from "react";
import { Container } from "reactstrap";
//
import Video from "../../Video";

export default ({ name, url, autoplay }) => (
  <Container className={`component-${name}`}>
    <Video url={url} playing={autoplay} />
  </Container>
);
