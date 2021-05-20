import React from "react";
import styled from "styled-components";
import {
  HomeLanding,
  GetToKnowMe,
  Acronym,
  PoetrySection,
  ToCome,
  ParallaxSection,
} from "../components";

export default () => (
  <MainContainer>
    <HomeLanding />
    <GetToKnowMe />
    <Acronym />
    <ParallaxSection />
    {/* <PoetrySection /> */}
  </MainContainer>
);

const MainContainer = styled.div`
  position: relative;
`;
