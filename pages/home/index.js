// @flow
import * as React from 'react'
import styled, { css } from 'styled-components'
import MediaQuery from 'react-responsive'
import { Account, InputForm } from '../../components'
import { Col, VerticalLine, ContentWrapper, Title, Home } from './styles'

export default () => (
	<Home>
		{/* Web components*/}
		<MediaQuery minDeviceWidth={500}>
			<ContentWrapper>
				<Col>
					<Title>Send Money</Title>
					<InputForm />
				</Col>
				<VerticalLine />
				<Col>
					<Title>My account</Title>
					<Account />
				</Col>
			</ContentWrapper>
		</MediaQuery>

		{/* Mobile components */}
		<MediaQuery maxDeviceWidth={499}>
			<div>Not Currently Supported</div>
		</MediaQuery>
	</Home>
)
