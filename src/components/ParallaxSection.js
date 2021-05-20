import React, { useRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import theme from "../styles/theme";
import { H4, H1, P, H2 } from "./";
import { Parallax } from "react-parallax";

const ParallaxSection = () => {
  return (
    <>
      <Parallax
        blur={0}
        bgImage="/starry_sky.jpg"
        bgImageAlt="the cat"
        strength={500}
      >
        <ParallaxContent>
          <H1 color={theme.lavander} xl>
            More content to follow
          </H1>
        </ParallaxContent>
      </Parallax>
    </>
  );
};

export default ParallaxSection;

const ParallaxContent = styled.div`
  height: 50vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;
