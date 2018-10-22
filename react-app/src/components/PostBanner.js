import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
//
import Tag from "./Tag";
import Breadcrumb from "./Breadcrumb";
import { getImageStyleUrl } from "../cockpit/utils";

const ContainerStyled = styled(Container)`
  position: relative;
  min-height: 350px;
  max-height: 500px;
  background: url(${props => getImageStyleUrl("PageBannerMedia", props.image)})
      50% 30% / cover no-repeat,
    linear-gradient(rgb(23, 34, 60), rgb(23, 34, 60));
  background-repeat: no-repeat;
  background-position: center 0px;
  padding: 4rem 3rem;
  margin-bottom: 1rem;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to bottom, rgb(0, 0, 0), transparent);
    opacity: 0.8;
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
    text-align: left;
    line-height: 1.25;
    letter-spacing: 0.05em;
    font-weight: 600;
    margin-top: 2rem;
    text-transform: uppercase;
    padding: 0.5rem;
  }

  p {
    font-size: 1rem;
    padding: 0.5rem;
    max-width: 32rem;
    text-align: left;
    line-height: 1.5;
    letter-spacing: 0.1em;
    color: rgb(255, 255, 255);
    margin-left: initial;
    margin-right: initial;
  }
`;

const Categories = styled.div`
  .badge {
    margin: 0.2rem;
  }
`;

const PostBanner = ({ title, summary, categories, image }) => (
  <ContainerStyled className="component--post-banner" fluid image={image}>
    <Head>
      <Container>
        <h1>{title}</h1>
        <p>{summary}</p>
        <Categories>
          {categories.map((tag, idx) => (
            <Tag tag={tag} color="light" key={`tag-${idx}`} />
          ))}
        </Categories>
        <Breadcrumb
          crumbs={[
            { text: "Blog", link: "/blog" },
            { text: title, active: true },
          ]}
        />
      </Container>
    </Head>
  </ContainerStyled>
);

export default PostBanner;
