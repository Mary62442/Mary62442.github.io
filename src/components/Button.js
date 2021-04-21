import React from "react";
import styled, { css } from "styled-components";

const Button = (props) => {
  return (
    <ButtonContainer {...props}>
      {props.icon && <Icon src={props.icon} />}
      {props.children}
    </ButtonContainer>
  );
};

const Icon = styled.img`
  width: 20px;
  display: inline;
  margin-right: 10px;
`;

const ButtonContainer = styled.button`
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 44px;
  padding: 0 24px;
  border-radius: 22px;
  border: none;
  outline: none;
  color: ${(props) => props.theme.secondaryColor};
  background: ${(props) => props.theme.gradientBlueShadesButton};
  transition: all 0.2s ease-out;
  margin: 0;
  width: ${(props) => (props.noStretch ? "initial" : "100%")};
  &:hover {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.secondaryColor};
    transform: translateY(-5px);
  }
  ${(props) =>
    props.center &&
    css`
      margin-left: auto;
      margin-right: auto;
    `}
  ${(props) =>
    props.margin &&
    css`
      margin-top: 20px;
      margin-bottom: 10px;
    `}
    ${(props) =>
    props.color &&
    css`
      color: ${(props) => props.color};
      &:hover {
        color: ${(props) => props.color};
      }
    `}

    ${(props) =>
    props.full &&
    css`
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme.secondaryColor};
      &:hover {
        color: ${(props) => props.color};
        background: ${(props) => props.theme.dark};
      }
    `}

    ${(props) =>
    props.transparent &&
    css`
      color: rgba(255, 255, 255, 0.8);
      background: transparent;
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
      &:hover {
        color: ${(props) => props.theme.dark};
        background: ${(props) => props.theme.white};
        box-shadow: 0 5px 15px rgba(255, 255, 255, 0.5);
      }

      ${(props) =>
        props.noHover &&
        css`
          &:hover {
            color: ${(props) => props.theme.white};
            background: transparent;
            box-shadow: inset 0 0 0 2px ${(props) => props.theme.white};
          }
        `}
    `}

    ${(props) =>
    props.white &&
    css`
      box-shadow: inset 0 0 0 2px ${(props) => props.theme.white};
      &:hover {
        background: ${(props) => props.theme.white};
        box-shadow: inset 0 0 0 2px ${(props) => props.theme.white},
          ${(props) => props.theme.boxShadowButtonWhite};
        transform: translateY(-5px);
      }
    `}


    ${(props) =>
    props.error404 &&
    css`
      box-shadow: none;
      color: white;
      background: linear-gradient(
        110.55deg,
        #ec7521 0%,
        #e2181d 33.33%,
        #962f7b 68.75%,
        #174592 100%
      );
      &:hover {
        box-shadow: none;
      }
    `}

    

    ${(props) =>
    props.eventButton &&
    css`
      background: linear-gradient(157.6deg, #f08300 -5.11%, #e3000f 109.6%);
      color: white;
      border: none;
      box-shadow: none;
      transition: 0.1s ease-in;
      z-index: 2;
      &:hover {
        box-shadow: ${(props) => props.theme.boxShadowS};
      }
      > img {
        padding: 0 20px 0 40px;
      }
      ${(props) =>
        props.noIcon &&
        css`
          > img {
            display: none;
          }
        `}
      ${(props) =>
        props.disabled &&
        css`
          cursor: initial;
          opacity: 0.3;
        `}
    `}
`;

export default Button;
