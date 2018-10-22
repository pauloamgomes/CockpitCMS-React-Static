import "bootstrap/dist/css/bootstrap.min.css";

import React, { Fragment } from "react";
import { Router } from "react-static";
import { hot } from "react-hot-loader";
import { Container, Row, Col } from "reactstrap";
import styled, { injectGlobal } from "styled-components";
//
import Routes from "react-static-routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

import theme from "./theme";

injectGlobal`
  body {
    font-family: ${theme.fontFamily};
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${theme.primaryColor};
  }

  img {
    max-width: 100%;
  }

  .content {
    padding: 1rem;
  }

  .container-fluid {
    padding-right: 0px;
    padding-left: 0px;
  }
`;

const ContainerStyled = styled(Container)`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const MainRow = styled(Row)`
  flex: 1 1 0%;
`;

const App = () => (
  <Router>
    <Fragment>
      <ContainerStyled fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <MainRow>
          <Col>
            <main>
              <Routes />
            </main>
          </Col>
        </MainRow>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </ContainerStyled>
    </Fragment>
  </Router>
);

export default hot(module)(App);
