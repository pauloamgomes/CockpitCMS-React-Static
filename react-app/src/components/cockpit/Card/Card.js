import React from "react";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import styled from "styled-components";
//
import { getImageStyleUrl } from "../../../cockpit/utils";
import Cta from "../../Cta";

const ContainerStyled = styled(Container)`
  padding-top: 1rem;
  padding-bottom: 1rem;

  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);

  img {
    width: 100%;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;

    :hover {
      opacity: 0.9;
      -moz-transform: scale(1.2);
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }
`;

const CardTextStyled = styled(CardText)`
  font-size: 0.9rem;
  min-height: 5.5rem;
`;

const Zoom = styled.div`
  overflow: hidden;
`;

export default ({
  name,
  title,
  subtitle,
  text,
  card_image,
  link_text,
  link_url,
}) => (
  <ContainerStyled className={`component--${name}`}>
    <Card>
      <Zoom>
        {card_image && (
          <CardImg
            top
            width="100%"
            src={getImageStyleUrl("Card", card_image)}
            alt={title || ""}
          />
        )}
      </Zoom>
      <CardBody>
        {title && <CardTitle>{title}</CardTitle>}
        {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
        {text && <CardTextStyled>{text}</CardTextStyled>}
        {link_url && <Cta text={link_text} url={link_url} theme="light" />}
      </CardBody>
    </Card>
  </ContainerStyled>
);
