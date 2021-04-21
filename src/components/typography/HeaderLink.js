import React from 'react'
import styled, {css} from 'styled-components'

const HeaderLink = ({children, white, focused, marginTop, ...props}) => {

  return (
    <HeaderLinkContainer {...props} marginTop={marginTop} white={white} focused={focused}>
      {children}
    </HeaderLinkContainer>
  )
}

const HeaderLinkContainer = styled.p`
font-family: 'Unica One', cursive;

  font-weight: 600;
  font-size: 20px;
  line-height:23px;
  margin: 0;
  position:relative;
  display:inline-block;
  cursor:pointer;
  &:hover a {
    color: ${props => props.white ? props.theme.white : props.theme.lavander};
  }
  a {
font-family: 'Unica One', cursive;

    text-decoration:none;
    color: ${props => (props.white && props.focused) ? props.theme.white : props.focused ? props.theme.lavander : props.white ? props.theme.white : props.theme.lavander};
    transition: all 0.1s ease-in;
    padding: 20px 30px;

  }
  ${props => props.focused && css`
    &:before {
        position:absolute;
        left:50%;
        transform: translatX(-50%);
        top:120%;
        height:5px;
        width:5px;
        border-radius:50%;
        content:'';
        background-color:${props => props.theme.white};
    }
  `}
  ${props => props.marginTop && css`
    margin: 10px 0;
  `}

  
`

export default HeaderLink
