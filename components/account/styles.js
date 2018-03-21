// @flow
import * as React from 'react'
import styled from 'styled-components'
import Graph from '../../assets/images/graph.svg'

const Name = styled.div`
	font-family: SF Pro Text;
	font-style: normal;
	font-weight: normal;
	line-height: 24px;
	font-size: 16px;
	color: #1c2139;

	margin-bottom: ${({ marginBottom }: { marginBottom: number }) =>
		marginBottom ? `${marginBottom}px` : `0px`};
`

const Email = Name.extend`
	font-size: 12px;
	color: #4a4a4a;
`

const Amount = Name.extend`
	font-weight: 600;
	line-height: 20px;
	font-size: 16px;
	text-align: right;
	color: #1c2139;
	float: right;
`

const StyledGraph = styled(Graph)`
	padding: none !important;
	width: 75px;
	height: 75px;
`

const InfoCol = styled.div`
	margin: 30px;
`

const SentAmount = styled.div`
	font-family: SF Pro Text;
	font-weight: 600;
	line-height: 24px;
	font-size: 16px;
	text-align: right;
	color: #1c2139;
	white-space: nowrap;
`

const SpendText = styled.div`
	font-family: SF Pro Text;
	line-height: 24px;
	font-size: 16px;
	text-align: ${({ alignRight }: { alignRight: boolean }) =>
		alignRight ? 'right' : 'left'};
	white-space: nowrap;
	color: #1c2139;
`

const Hr = styled.div`
	clear: both;
	border: 0.4px solid #d6d7de;
	margin-bottom: 14px;
`

const SubTitle = styled.div`
	font-family: Alverata;
	font-style: normal;
	font-weight: 900;
	line-height: 24px;
	font-size: 16px;
	letter-spacing: 0.1px;
	color: #0b1137;
	margin-bottom: 30px;
`

const InfoWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-bottom: 80px;
`

const Account = styled.div``
Account.Wrapper = InfoWrapper
Account.InfoCol = InfoCol
Account.Graph = StyledGraph
Account.SpendText = SpendText
Account.SubTitle = SubTitle
Account.ItemName = Name
Account.ItemEmail = Email
Account.ItemAmount = Amount
Account.Hr = Hr
Account.SentAmount = SentAmount

export default Account
