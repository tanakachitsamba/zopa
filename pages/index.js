// @flow
import * as React from 'react'
import styled, { css } from 'styled-components'
import InputForm from '../components/inputform'
import { media } from '../style-utils'

const StyledTitle = styled.div`
    font-family: Alverata;
    font-weight: 900;
    line-height: 40px;
    font-size: 32px;
    color: #1C2139;
    display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
    width: 80%;
	margin: 0 auto 44px auto;

	${media.retina`
		width: 80%;
        font-size: 40px;
        margin: 0 auto 60px auto;
	`}


`

const Wrapper = styled.div`
    margin: 6em auto;
`

export default () => (
    <Wrapper>
        <StyledTitle>Send Money</StyledTitle>
        <InputForm />
    </Wrapper>
)
