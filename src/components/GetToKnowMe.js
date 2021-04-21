import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import theme from "../styles/theme";
import H1 from "./typography/H1";
import P from "./typography/P";
import Button from "./Button";
import H4 from "./typography/H4";

const GetToKnowMe = () => {
  return (
    <MainContainer>
      <MariaOutline src="/maria_outline.png" />
      <GetToKnowMeText>
        <H1 color={theme.lavander} xl white>
          Hello everybody!
        </H1>
        <P small white>
          I'm a web developer and designer always looking for that bit of spice
          to brighten up your ideas.
        </P>
        <P small white padding="0 0 24px 0 ">
          I love experimenting and I love creating beautiful things.
        </P>

        <a href="/Maria_Burlando_CV.pdf" download>
          <Button transparent margin noStretch>
            Download my CV
          </Button>
        </a>
      </GetToKnowMeText>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100vw;
  margin-top: 100vh;
  position: relative;
  text-align: center;
  background: linear-gradient(
    to top,
    rgba(0, 26, 50, 1),
    rgba(0, 26, 50, 1) 40%,
    rgba(0, 26, 50, 0)
  );
  z-index: 1;
  padding: 0 12px;
  box-sizing: border-box;

  &:before {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    top: 100%;
    left: 0;
    border-top: 100px solid rgba(0, 26, 50, 1);
    border-left: 50vw solid rgba(0, 26, 50, 0);
    border-right: 50vw solid rgba(0, 26, 50, 0);
  }

  @media (min-width: 600px) {
    background: linear-gradient(to top, rgba(0, 26, 50, 1), rgba(0, 26, 50, 0));
    &:before {
      border-top: 200px solid rgba(0, 26, 50, 1);
      border-left: 50vw solid rgba(0, 26, 50, 0);
      border-right: 50vw solid rgba(0, 26, 50, 0);
    }
  }
`;

const MariaOutline = styled.img`
  width: 100%;

  @media (min-width: 600px) {
    width: 60vw;
  }
`;

const GetToKnowMeText = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 100px 0 20px 0;
  width: 100%;
  color: white;

  @media (min-width: 600px) {
    width: 40vw;
  }
`;

export default GetToKnowMe;
