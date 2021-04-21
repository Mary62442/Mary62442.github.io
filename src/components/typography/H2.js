import React from 'react'
import styled, {css} from 'styled-components'

const H2 = ({children, white, color, ...props}) => {

  return (
    <H2Container {...props} white={white} color={color}>
      {children}
    </H2Container>
  )
}

const H2Container = styled.h2`
font-family: 'Josefin Slab', serif;

  display:flex;
  align-items:center;
  font-weight: ${props => props.light ? "normal" : "600"};
  font-size: 26px;
  line-height: 32px;
  margin: 0;
  color:${props => props.white ? props.theme.greyScale.white : props.color ? props.color : 'initial'};
  >img {
    margin-right:10px;
  }
`

export default H2
