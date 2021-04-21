import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import theme from "../styles/theme";
import { H4, H1, P } from "./";

const GetToKnowMe = () => {
  return (
    <MainContainer>
      <LettersContainer>
        <div>
          <H1 xl noMargin>
            M
          </H1>
          <H1 xl noMargin>
            a
          </H1>
          <H1 xl noMargin>
            R
          </H1>
          <H1 xl noMargin>
            I
          </H1>
          <H1 xl noMargin>
            A
          </H1>
        </div>
        <div>
          <GroupsOfLetters>
            <H4>a</H4>
            <H4>g</H4>
            <H4>n</H4>
            <H4>e</H4>
            <H4>t</H4>
            <H4>i</H4>
            <H4>c</H4>
          </GroupsOfLetters>

          <GroupsOfLetters>
            <H4>c</H4>
            <H4>t</H4>
            <H4>i</H4>
            <H4>v</H4>
            <H4>e</H4>
          </GroupsOfLetters>

          <GroupsOfLetters>
            <H4>a</H4>
            <H4>p</H4>
            <H4>i</H4>
            <H4>d</H4>
          </GroupsOfLetters>

          <GroupsOfLetters>
            <H4>m</H4>
            <H4>a</H4>
            <H4>g</H4>
            <H4>i</H4>
            <H4>n</H4>
            <H4>a</H4>
            <H4>t</H4>
            <H4>i</H4>
            <H4>v</H4>
            <H4>e</H4>
          </GroupsOfLetters>

          <GroupsOfLetters>
            <H4>d</H4>
            <H4>a</H4>
            <H4>p</H4>
            <H4>t</H4>
            <H4>a</H4>
            <H4>b</H4>
            <H4>l</H4>
            <H4>e</H4>
          </GroupsOfLetters>
        </div>
      </LettersContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  height: 90vh;

  text-align: center;
  background-color: white;
`;

const LettersContainer = styled.div`
  padding-top: 300px;
  margin: 0 auto;
  width: 400px;
  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    > h1 {
      width: 30px;
      color: #8d828f;
      &:first-of-type {
        text-align: left;
      }
      &:last-of-type {
        text-align: right;
      }
    }

    &:nth-of-type(2) {
      margin: 0 0 0 6px;
      width: 97%;
    }
  }
`;

const GroupsOfLetters = styled.div`
  text-align: center;
`;

export default GetToKnowMe;
