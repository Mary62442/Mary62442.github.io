import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import theme from "../styles/theme";
import { H4, H1, P, H2 } from "./";

const ToCome = () => {
  return (
    <MainContainer>
      <Holder>
        <Bubble1></Bubble1>
        <Bubble2></Bubble2>
        <Bubble3></Bubble3>
        <Bubble4></Bubble4>
        <H1 color={theme.dark}>More content to come soon...</H1>
      </Holder>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  position: relative;
  height: 300px;

  background-color: white;
  padding: 0 12px;
`;

const Holder = styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 600px) {
    width: 60%;
  }
`;

const Bubble1 = styled.div`
  position: absolute;
  bottom: 150px;
  left: -40px;
  width: 200px;
  border-radius: 50%;
  height: 200px;
  background-color: rgba(0, 200, 149, 0.3);
`;
const Bubble2 = styled.div`
  position: absolute;
  bottom: 30px;
  right: -20px;
  width: 300px;
  border-radius: 50%;
  height: 300px;
  background-color: rgba(95, 95, 171, 0.3);
`;

const Bubble3 = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50%;
  width: 100px;
  border-radius: 50%;
  height: 100px;
  background-color: rgba(255, 185, 90, 0.3);
`;

const Bubble4 = styled.div`
  position: absolute;
  bottom: 50px;
  left: 10%;
  width: 250px;
  border-radius: 50%;
  height: 250px;
  background-color: rgba(83, 84, 158, 0.1);
`;

export default ToCome;
