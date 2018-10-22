import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
//
import Breadcrumb from "../../Breadcrumb";
import { getImageStyleUrl } from "../../../cockpit/utils";

const ContainerStyled = styled(Container)`
  height: 100vh;
  position: relative;
  max-height: ${props => (props.height === "large" ? 400 : 260)}px;
  background: url(${props =>
        getImageStyleUrl(
          (props.summary && "PageBannerMedia") || "PageBanner",
          props.image
        )})
      50% 30% / cover no-repeat,
    linear-gradient(rgb(23, 34, 60), rgb(23, 34, 60));
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin-bottom: 1rem;

  h1 {
    color: rgb(255, 255, 255);
    font-size: 2.25rem;
    text-align: left;
    line-height: 1.25;
    letter-spacing: 0.05em;
    font-weight: 600;
    margin: 0px;
    text-transform: uppercase;
    padding-left: 0.5rem;
  }

  p {
    font-size: 1rem;
    max-width: 32rem;
    text-align: left;
    line-height: 1.5;
    letter-spacing: 0.1em;
    color: rgb(255, 255, 255);
    margin-left: initial;
    margin-right: initial;
    padding-left: 0.5rem;
  }
`;

const Head = styled.div`
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 4rem 4rem;
`;

const InnerContainer = styled(Container)`
  margin-top: 3.5rem;
`;

export default ({ name, title, summary, image, height }) => (
  <ContainerStyled
    className={`component--${name}`}
    fluid
    image={image}
    height={height}
  >
    <Head>
      <InnerContainer>
        <h1>{title}</h1>
        {summary && <p>{summary}</p>}
      </InnerContainer>
    </Head>
    <Breadcrumb crumbs={[{ text: title, active: true }]} />
  </ContainerStyled>
);
