import React from 'react'
import styled, { css } from 'styled-components'

// media query mixin 
export const media = {
    ipad: (...args) => css`
        @media 
        (-webkit-min-device-pixel-ratio: 2), 
        (min-resolution: 192dpi) { 
            ${css(...args)}
        }
    `, 

    retina: (...args) => css`
        @media only screen (max-device-width: 767px)  {
            ${css(...args)}
        }
    `
}