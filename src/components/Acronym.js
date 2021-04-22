import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Bounce, Flip, Zoom, Fade } from "react-reveal";
import Pulse from "react-reveal/Pulse";
import Wobble from "react-reveal/Wobble";
import theme from "../styles/theme";
import { H4, H1, P } from "./";

const Acronym = () => {
  return (
    <MainContainer>
      <Bubble1 bottom={"40%"} right={"30%"}></Bubble1>
      <Bubble1 bottom={"10%"} right={"10%"}></Bubble1>
      <Bubble2 bottom={"30%"} right={"-40px"}></Bubble2>
      <Bubble2 bottom={"-30px"} right={"20%"}></Bubble2>
      <Bubble3 bottom={"40px"} left={"20%"}></Bubble3>
      <Bubble3 bottom={"20%"} left={"10%"}></Bubble3>
      <Bubble4 bottom={"20%"} left={"20%"}></Bubble4>
      <Bubble4 bottom={"10%"} left={"-40px"}></Bubble4>
      <LettersContainer>
        <Fade top cascade>
          <AdjectiveBlock>
            <Pulse duration={3000} forever>
              <NameLetter color={theme.lavander}>M</NameLetter>
            </Pulse>
            <H4>
              <Bounce right cascade>
                AGNETIC
              </Bounce>
            </H4>
          </AdjectiveBlock>
          <AdjectiveBlock>
            <Pulse duration={3000} forever>
              <NameLetter color={theme.lavanderDark}>A</NameLetter>
            </Pulse>
            <H4>
              <Bounce right cascade>
                ACTIVE
              </Bounce>
            </H4>
          </AdjectiveBlock>
          <AdjectiveBlock>
            <Pulse duration={3000} forever>
              <NameLetter color={theme.purple}>R</NameLetter>
            </Pulse>
            <H4>
              <Bounce right cascade>
                APID
              </Bounce>
            </H4>
          </AdjectiveBlock>
          <AdjectiveBlock>
            <Pulse duration={3000} forever>
              <NameLetter color={theme.purpleLight}>I</NameLetter>
            </Pulse>
            <H4>
              <Bounce right cascade>
                MAGINATIVE
              </Bounce>
            </H4>
          </AdjectiveBlock>
          <AdjectiveBlock>
            <Pulse duration={3000} forever>
              <NameLetter color={theme.lavander}>A</NameLetter>
            </Pulse>
            <H4>
              <Bounce right cascade>
                DAPTABLE
              </Bounce>
            </H4>
          </AdjectiveBlock>
        </Fade>
      </LettersContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  //height: 650px;
  text-align: center;
  background-color: white;
  overflow: hidden;
`;

const LettersContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 150px 24px 42px 24px;

  @media (min-width: 600px) {
    padding: 250px 24px 42px 24px;
    width: 400px;
  }
`;
const AdjectiveBlock = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-start;
  padding: 18px 0;
  > h4 {
    letter-spacing: 3px;
    font-weight: 600;
    color: ${(props) => props.theme.purpleLight};
  }
`;

const NameLetter = styled.h1`
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.color};
  box-shadow: -5px 5px 20px ${(props) => props.theme.lavander};
  color: white;
  line-height: 80px;
  font-size: 60px;
  font-family: "Unica One";
  border-radius: 8px;
  margin-right: 12px;
`;

const Bubble1 = styled.div`
  position: absolute;
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  width: 100px;
  border-radius: 50%;
  height: 100px;
  background-color: rgba(0, 200, 149, 0.2);
  @media (min-width: 800px) {
    height: 200px;
    width: 200px;
  }
`;
const Bubble2 = styled.div`
  position: absolute;
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  width: 150px;
  border-radius: 50%;
  height: 150px;
  background-color: rgba(95, 95, 171, 0.2);
  @media (min-width: 800px) {
    height: 300px;
    width: 300px;
  }
`;

const Bubble3 = styled.div`
  position: absolute;
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  width: 50px;
  border-radius: 50%;
  height: 50px;
  background-color: rgba(255, 185, 90, 0.2);
  @media (min-width: 800px) {
    height: 100px;
    width: 100px;
  }
`;

const Bubble4 = styled.div`
  position: absolute;
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  width: 125px;
  border-radius: 50%;
  height: 125px;
  background-color: rgba(83, 84, 158, 0.1);
  @media (min-width: 800px) {
    height: 250px;
    width: 250px;
  }
`;

export default Acronym;
