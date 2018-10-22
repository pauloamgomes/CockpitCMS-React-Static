import React from "react";
import { Container, Row } from "reactstrap";
import styled from "styled-components";
//
import Column from "./Column";

const ContainerStyled = styled(Container)`
  margin: 1rem auto;

  .page--components {
    .container {
      padding: 0px;

      &.component--text {
        ul {
        }
      }
    }
  }
`;

export default ({ name, columns }) => (
  <ContainerStyled className={`component--${name}`}>
    <Row>
      {columns &&
        columns.map((column, idx) => (
          <Column {...column} cols={columns.length} key={`key-${idx}`} />
        ))}
    </Row>
  </ContainerStyled>
);
