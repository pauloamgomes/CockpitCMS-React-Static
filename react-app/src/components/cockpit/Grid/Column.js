import React from "react";
import { Col } from "reactstrap";
import styled from "styled-components";
//
import PageComponents from "../../PageComponents";

const ColStyled = styled(Col)`
  h1 {
    font-size: 1.5rem;
  }
  h2 {
    font-size: 1.4rem;
  }
  h3 {
    font-size: 1.3rem;
  }
  h4 {
    font-size: 1.2rem;
  }
  img {
    width: auto;
  }
  button {
    width: 100%;
  }
`;

export default ({ children, cols }) => {
  let sm = 12;
  let md = 12;
  if (cols === 2) {
    sm = 6;
    md = 6;
  } else if (cols === 3) {
    sm = 6;
    md = 4;
  } else if (cols === 4) {
    sm = 6;
    md = 3;
  }
  return (
    <ColStyled xs="12" sm={sm} md={md}>
      <PageComponents components={children} />
    </ColStyled>
  );
};
