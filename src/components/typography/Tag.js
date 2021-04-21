import React from 'react'
import styled, {css} from 'styled-components'

const Tag = (props) => {

  return (
    <TagContainer {...props} >
      {props.children}
      {props.download && <Icon src="/svg/download.svg" />}
    </TagContainer>
  )
}

const TagContainer = styled.p`
z-index:1;
  font-weight: 600;
  text-transform:uppercase;
  font-size: 16px;
  line-height:18px;
  padding:6px 15px;
  border-radius:4px;
  color: ${props => props.color && props.color};
  background-color:   ${props => props.backgroundColor && props.backgroundColor};
  display:inline-block;
  border:${props => props.border && '1px solid currentColor'};
  margin: ${props => props.margin ? '15px 0' : '0'};
  ${props => props.download && css`
    text-transform:none;
    cursor:pointer;
    transition:0.1s ease-in;
    &:hover {
      box-shadow:${props => props.theme.boxShadowS};
    }
  `}
`

const Icon = styled.img`
margin-left:10px;`

export default Tag
