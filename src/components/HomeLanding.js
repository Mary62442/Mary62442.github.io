import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import theme from "../styles/theme";
import { Fade } from "react-reveal";

const HomeLanding = () => {
  const [stars, setStars] = useState(null);

  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    let starsToAdd = [];

    for (let i = 0; i < 100; i++) {
      let randomSize = Math.floor(Math.random() * 6 + 1);
      let randomTop = Math.floor(Math.random() * height + 1);
      let randomLeft = Math.floor(Math.random() * width + 1);
      let randomOpacity = Math.floor(Math.random() * 10 + 5) / 10;
      let randomDuration = Math.floor(Math.random() * 20 + 5) / 10;
      let randomColor = Math.floor(Math.random() * 360 + 1);
      let revOrNot = Math.floor(Math.random() * 2 + 1);
      let rev = "normal";
      if (revOrNot == 1) rev = "reverse";
      starsToAdd.push(
        <Star
          style={{
            backgroundColor: `hsl(${randomColor},100%,90%)`,
            top: `${randomTop}px`,
            left: `${randomLeft}px`,
            opacity: `${randomOpacity}`,
            animationDirection: `${rev}`,
            width: `${randomSize}px`,
            height: `${randomSize}px`,
            animation: `pulse linear ${randomDuration}s infinite ${randomOpacity}s`,
          }}
        />
      );

      setStars(starsToAdd);
    }
  }, []);

  return (
    <MainContainer>
      {stars}
      <div>
        <Fade top duration={1000}>
          <MariaBurlando>Maria Burlando</MariaBurlando>
        </Fade>
        <Fade delay={700} duration={2000} bottom>
          <Role>/DEVELOPER /DESIGNER /DREAMER</Role>
        </Fade>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  left: 0;
  top: 0px;
  position: fixed;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)),
    url("/lighthouse.jpg");
  background-size: 150%;
  background-position: top left;
`;

const Gradient1 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${(props) => props.theme.gradientBlueShades};
  top: 0;
  left: 0;
  z-index: -1;
  animation: gradient1 15s linear infinite;
`;

const Gradient2 = styled.div`
  background: ${(props) => props.theme.gradientWarm};
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -2;
  animation: gradient2 15s linear infinite;
`;

const Gradient3 = styled.div`
  background: ${(props) => props.theme.gradientCool};
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -3;
`;

const Star = styled.div`
  border-radius: 50%;
  box-shadow: 0 0 20px white;
  position: absolute;
`;

const MariaBurlando = styled.p`
  font-family: "Italiana", serif;
  color: white;
  font-size: 80px;
  text-align: center;

  @media (min-width: 600px) {
    font-size: 150px;
  }
`;

const Role = styled.p`
  text-align: center;
  color: white;
  color: ${(props) => props.theme.white};
  animation: appear 1s ease-in-out forwards;
  margin: 0;

  @media (min-width: 600px) {
    text-align: right;
    margin-top: -1rem;
  }
  @keyframes slideIn {
    0% {
      opacity: 0;
      margin-bottom: 100px;
    }
    100% {
      opacity: 1;
      margin-bottom: 0px;
    }
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes gradient1 {
    0% {
      opacity: 1;
    }
    16% {
      opacity: 1;
    }
    32% {
      opacity: 0;
    }
    76% {
      opacity: 0;
    }
    92% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes gradient2 {
    0% {
      opacity: 1;
    }
    48% {
      opacity: 1;
    }
    64% {
      opacity: 0;
    }
    92% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes pulse {
    from {
      transform: rotate(0deg) translateX(1px) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translateX(1px) rotate(-360deg);
    }
  }
`;
export default HomeLanding;
