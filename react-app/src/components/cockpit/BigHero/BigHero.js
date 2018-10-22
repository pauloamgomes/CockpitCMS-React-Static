import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
//
import { getImageStyleUrl } from "../../../cockpit/utils";
import CustomImage from "../CustomImage";
import Video from "../../Video";

const ContainerStyled = styled(Container)`
  height: 100vh;
  position: relative;
  max-height: 100vh;
  background: url(${props => getImageStyleUrl("BigHero", props.background)}) 50%
      30% / cover no-repeat,
    linear-gradient(rgb(41, 48, 97), rgb(41, 48, 132));
  background-repeat: no-repeat;
  background-position: 50% 30%;
  margin-bottom: 1rem;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      to bottom,
      rgb(41, 48, 97),
      rgb(41, 48, 132)
    );
    opacity: 0.3;
  }
`;

const Head = styled.div`
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 3rem 4rem;
  padding-top: 6rem;

  h1 {
    color: rgb(255, 255, 255);
    font-size: 2.25rem;
    text-align: center;
    line-height: 1.25;
    font-weight: 600;
    text-transform: uppercase;
    margin: 1rem auto;
  }

  h2 {
    font-size: 1.3rem;
    opacity: 0.8;
    max-width: 32rem;
    text-align: center;
    line-height: 1.5;
    letter-spacing: 0.1em;
    color: rgb(255, 255, 255);
    margin: 1rem auto;
  }
`;

const Media = styled.div`
  text-align: center;
  margin: 0px auto;
  max-width: 700px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;

export default ({ name, title, subtitle, bgimage, heroimage, herovideo }) => (
  <ContainerStyled background={bgimage} className={`component--${name}`} fluid>
    <Container>
      <Head>
        <Row>
          <Col>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Media>
              {heroimage && <CustomImage {...heroimage} />}
              {herovideo && <Video url={herovideo} playing />}
            </Media>
          </Col>
        </Row>
      </Head>
    </Container>
  </ContainerStyled>
);
