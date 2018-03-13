import React from 'react'
import styled, { css } from 'styled-components'
import InputForm from '../components/inputform'

// media query mixin 
const media = {
  ipad: (...args) => css`
    @media (max-width: 1020px) {
      ${ css(...args) }
    }
  `
}

// div component with css props for faster styling 
const Div = styled.div`
  ${media.ipad`
    ${({ipad}) => css`${ipad}`}
  `}
`


export default () => (
  <React.Fragment>
    <InputForm />
  </React.Fragment>
)
