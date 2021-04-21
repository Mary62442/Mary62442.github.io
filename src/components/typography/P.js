import React from "react";
import styled, { css } from "styled-components";

const P = (props) => {
  return (
    <PContainer {...props} onClick={props.onClick}>
      {props.children}
    </PContainer>
  );
};

const PContainer = styled.p`
  font-weight: ${(props) =>
    props.bold ? "600" : props.superBold ? "bold" : "normal"};
  font-size: ${(props) =>
    props.small ? "16px" : props.xSmall ? "12px" : "18px"};
  line-height: ${(props) =>
    props.wide ? "34px" : props.span ? "18px" : "24px"};
  letter-spacing: 1px;
  color: ${(props) =>
    props.white
      ? "white"
      : props.opaque
      ? props.theme.greyScale.grey3
      : props.color
      ? props.color
      : "initial"};
  margin: 0;
  text-transform: ${(props) => props.uppercase && "uppercase"};
  ${(props) =>
    props.small &&
    props.wide &&
    css`
      font-size: 16px;
      line-height: 30px;
    `}

  ${(props) =>
    props.padding &&
    css`
      padding: ${(props) => props.padding};
    `}

  ${(props) =>
    props.underline &&
    css`
      text-decoration: underline;
      cursor: pointer;
    `}
    ${(props) =>
    props.italic &&
    css`
      font-style: italic;
    `}
`;

export default P;
