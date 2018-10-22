import React from "react";
import { NavLink, withRouteData, SiteData } from "react-static";
import { Container, Row, Col } from "reactstrap";
import convert from "htmr";
import styled from "styled-components";

const FooterStyles = styled.footer`
  margin-top: 2rem;

  .container-fluid {
    text-align: center;
    color: rgb(255, 255, 255);
    padding: 2rem;
    background: center 0px no-repeat,
      linear-gradient(rgb(248, 248, 248), rgb(252, 252, 252));
  }
`;

const RowNav = styled(Row)`
  padding: 2rem 0px;

  a {
    padding: 1rem;
    color: rgb(96, 91, 229);
  }
`;

const RowCopyright = styled(Row)`
  padding: 2rem 0px;
  font-size: 0.9rem;
  color: rgb(55, 55, 55);
  a {
    color: rgb(75, 75, 75);
  }
  span {
    color: rgb(214, 81, 55);
  }
`;

export default withRouteData(({ pages }) => (
  <FooterStyles role="banner">
    <Container fluid>
      <RowNav>
        <Col>
          <nav>
            {pages &&
              pages.map(
                (page, idx) =>
                  page.menu.includes("footer") && (
                    <NavLink key={`menu-${idx}`} exact to={`/${page.slug}`}>
                      {page.title}
                    </NavLink>
                  )
              )}
          </nav>
        </Col>
      </RowNav>
      <RowCopyright>
        <Col>
          <SiteData>
            {({ copyright }) => <div>{convert(copyright)}</div>}
          </SiteData>
        </Col>
      </RowCopyright>
    </Container>
  </FooterStyles>
));
