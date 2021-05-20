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
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.lightGrey},
    white
  );
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

export default Acronym;
