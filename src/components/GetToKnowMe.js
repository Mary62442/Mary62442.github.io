
import React, {useContext, useEffect, useState} from 'react';
import styled, { css } from 'styled-components';
import theme from '../styles/theme';
import H1 from './typography/H1';
import P from './typography/P';


const GetToKnowMe = () => {

    return (
        <MainContainer>
            <MariaOutline src="/maria_outline.png"/>
            <GetToKnowMeText>
                <H1 white>Get to know me!</H1>
                <P white>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus auctor mollis. Duis egestas ex in velit lacinia, eget sagittis est condimentum. Proin interdum pellentesque ex. Ut quis neque laoreet libero lacinia ultrices. </P>
            </GetToKnowMeText>
        </MainContainer>
)};

const MainContainer = styled.div`
width:100vw;
margin-top:100vh;
position:relative;
text-align:center;
background: linear-gradient(to top, rgba(31,29,31,1), rgba(31,29,31,1), rgba(31,29,31,0.9), rgba(31,29,31,0.8), rgba(31,29,31,0));
z-index:1;

    &:before {
    content:'';
    position:absolute;
    width:0px;
    height:0px;
    top:100%;
    left:0;
    border-top:200px solid rgba(31,29,31,1);
    border-left:50vw solid rgba(31,29,31,0);
    border-right:50vw solid rgba(31,29,31,0);
    }
`

const MariaOutline = styled.img`
    width:60vw;
    
`

const GetToKnowMeText = styled.div`
    text-align:center;
    margin:0 auto;
    padding:100px 0 20px 0;
    width:40vw;
    color:white;

`

export default GetToKnowMe;