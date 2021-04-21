import React from "react";
import styled, { css } from "styled-components";

const H4 = ({ ...props }) => {
  return <H4Container {...props}>{props.children}</H4Container>;
};

const H4Container = styled.h4`
  font-family: "Open Sans", sans-serif;

  font-weight: 300;
  font-size: 22px;
  line-height: 25px;
  margin: 0;
  ${(props) =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `};
  color: ${(props) =>
    props.white ? props.theme.white : props.color ? props.color : "initial"};
`;

export default H4;
