import React from 'react'
import styled, {css} from 'styled-components'

const MoreLink = ({children, white, color}) => {

  return (
    <MoreLinkContainer color={color} white={white}>
      {children}
    </MoreLinkContainer>
  )
}

const MoreLinkContainer = styled.a`
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  color: ${props => props.white ? props.theme.greyScale.white : props.color ? props.color : props.theme.uiSecondaryColors.accentBlue};
  margin: 0;
  text-decoration: ${props => props.underlined ? "underline" : "none"};
  cursor: pointer;
`

export default MoreLink
