import React from 'react'
import styled, {css} from 'styled-components'

const H1 = (props) => {

  return (
    <H1Container {...props}>
      {props.children}
    </H1Container>
  )
}

const H1Container = styled.h1`
font-family: 'Unica One', serif;
position:relative;
  font-weight: ${props => props.light ? 'normal': '600'};
  padding-bottom:${props => props.noMargin ? '0': '20px'};
  font-size: ${props => props.quotation ? '40px' : '36px'};
  line-height: ${props => props.quotation ? '46px' : '42px'};
  margin: 0;
  color: ${props => props.color ? props.color : props.white ? 'white' : 'initial'};
  ${props => props.cta && css`
    font-size:46px;
    line-height:52px;
    font-weight:500;
  `}
  ${props => props.italic && css`
    font-style:italic;
  `}
  ${props => props.xl && css`
    font-size: 52px;
    line-height:58px;
  `}
`

export default H1
