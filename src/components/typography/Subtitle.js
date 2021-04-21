import React from 'react'
import styled, {css} from 'styled-components'

const Subtitle = ({children}) => {

  return (
    <SubtitleContainer>
      {children}
    </SubtitleContainer>
  )
}

const SubtitleContainer = styled.p`
  font-weight: 600;
  color: ${props => props.theme.greyScale.grey3};
  font-size: 26px;
  line-height: 30px;
  margin: 0;
`

export default Subtitle
