
import React, {useContext, useEffect, useState} from 'react';
import styled, { css } from 'styled-components';
import theme from '../styles/theme';


const PoetrySection = () => {


    return (
        <MainContainer>
            <div>
                <Title>What is life without poetry?</Title>
            </div>

            <PoetryCardsContainer>

            </PoetryCardsContainer>
        </MainContainer>
)};

const MainContainer = styled.div`
width:100%;
position:relative;
background-image: url('/lighthouse.jpg');
background-position:top center;

>div:first-of-type {
    width:100%;
    padding:600px 0;
    background-image:linear-gradient(to top, rgba(31,29,31,1), rgba(31,29,31,0));
}
`

const Title = styled.p`
font-family: 'Italiana', serif;
max-width:1300px;
width:90%;
margin:0 auto;
color:white;
font-size:150px;
`

const PoetryCardsContainer = styled.div`
    background-color:rgba(31,29,31,1);
    width:100%;
    height:100vh;
`

export default PoetrySection;