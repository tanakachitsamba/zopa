// @flow
import * as React from 'react'
import styled from 'styled-components'

const Home = styled.div`
	min-height: 100vh;
	min-width: 100vw;
	display: flex;
	flex-direction: column;
`

const Title = styled.div`
	font-family: Alverata;
	font-weight: 900;
	line-height: 40px;
	font-size: 32px;
	color: #1c2139;
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	width: 80%;
	margin: 0 auto 44px auto;
`

const ContentWrapper = styled.div`
	margin: 6em auto;
	display: flex;
	flex: 1;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex-wrap: nowrap;
`

const VerticalLine = styled.div`
	align-self: center;
	border-left: 1px solid #e9eaf4;
	height: 670px;
`

const Col = styled.div`
	align-self: flex-start;

	> * {
		display: flex;
		flex: 1;
		flex-direction: column;
		width: 80%;
		margin: 0 auto;
		padding-left: 3em;
		padding-right: 3em;
		padding-bottom: 2em;
		padding-top: 2em;
		width: 340px;
	}
`

export { Col, VerticalLine, ContentWrapper, Title, Home }