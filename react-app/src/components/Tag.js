import React from "react";
import { Badge } from "reactstrap";
import styled from "styled-components";

const BadgeStyled = styled(Badge)`
  background: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 4px;
`;

export default ({ tag, color }) => (
  <BadgeStyled color={color || "secondary"}>{tag}</BadgeStyled>
);
