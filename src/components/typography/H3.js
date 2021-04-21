import React from 'react'
import styled, {css} from 'styled-components'

const H3 = ({...props}) => {

  return (
    <H3Container {...props}>
      {props.children}
    </H3Container>
  )
}

const H3Container = styled.h3`
font-family: 'Josefin Slab', serif;

  font-weight: 600;
  font-size: 22px;
  line-height: 25px;
  margin: 0;
  ${props => props.uppercase && css`text-transform:uppercase`};
  color:${props => props.white ? props.theme.greyScale.white : props.color ? props.color : 'initial'};
`

export default H3
