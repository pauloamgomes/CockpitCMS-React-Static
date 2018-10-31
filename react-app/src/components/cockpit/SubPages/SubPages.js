import React from "react";
import { Container, Row, Col } from "reactstrap";
import { withRouteData } from "react-static";
import styled from "styled-components";
//
import Navigation from "./Navigation";
import Components from "./Components";

const ContainerStyled = styled(Container)``;

export default withRouteData(({ name, title, page, match }) => (
  <ContainerStyled className={`component--${name}`} fluid>
    <Container>
      {title && (
        <Row>
          <h1>{title}</h1>
        </Row>
      )}
      <Row>
        <Col sm="2">
          <Navigation />
        </Col>
        <Col sm="10">
          <Components
            subpages={(page && page.subpages) || []}
            page={
              page &&
              page.subpages &&
              page.slug &&
              page.subpages.filter(
                subpage => match.url === `/${page.slug}/${subpage.slug}`
              )
            }
          />
        </Col>
      </Row>
    </Container>
  </ContainerStyled>
));
