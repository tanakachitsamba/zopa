import React from 'react'
import styled, { css } from 'styled-components'

// media query mixin 
export const media = {
    ipad: (...args) => css`
      @media (max-width: 1020px) {
        ${ css(...args) }
      }
    `
}
  
// div component with css props for faster styling 
export const Div = styled.div`
    ${media.ipad`
        ${({ipad}) => css`${ipad}`}
    `}
`