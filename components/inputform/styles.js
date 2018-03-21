// @flow
import * as React from 'react'
import CurrencyInput from 'react-currency-input'
import styled from 'styled-components'

const Form = styled.form``

const StyledLabel = styled.label`
	font-family: SF Pro Text;
	line-height: 20px;
	font-size: 15px;
	color: #1c2139;
	padding-bottom: 5px;
	${({ topLabel }: { topLabel: boolean }) => !topLabel && `margin-top: 36px;`};
`

const StyledInput = styled.input`
	font-family: SF Pro Display;
	font-size: 20px;
	line-height: 24px;
	color: #000000;
	width: 100%;
	border: none;
	border-radius: 0;
	padding: 10px 10px 10px 0;
	transition: border-bottom 2s;
	border-bottom: 2px solid
		${({ error, touched }: { [x: string]: boolean }) =>
			touched && error ? '#D0021B' : '#d6d7de'};

	:focus {
		border-bottom: 2px solid
			${({ error, touched }: { [x: string]: boolean }) =>
				touched && error ? '#D0021B' : '#4B3CFA'};
	}
`

const StyledButton = styled.button`
	font-family: SF Pro Text;
	font-size: 16px;
	font-weight: 600;
	line-height: 24px;
	text-align: center;
	background: #4b3cfa;
	color: white;
	border-radius: 100px;
	display: inline-block;
	border: none;
	text-decoration: none;
	height: 48px;
	margin-top: 190px;
`

const StyledErrorText = styled.div`
	font-family: SF Pro Text;
	line-height: 20px;
	font-size: 14px;
	color: #d0021b;
	margin-top: 5px;
`

const StyledCurrencyInput = styled(CurrencyInput)`
	font-family: SF Pro Display;
	font-size: 20px;
	line-height: 24px;
	color: #000000;
	width: 100%;
	border: none;
	border-radius: 0;
	padding: 20px 10px 10px 0;
	transition: border-bottom 2s;
	border-bottom: 2px solid
		${({ error, touched }: { [x: string]: boolean }) =>
			touched && error ? '#D0021B' : '#d6d7de'};

	:focus {
		border-bottom: 2px solid
			${({ error, touched }: { [x: string]: boolean }) =>
				touched && error ? '#D0021B' : '#4B3CFA'};
	}
`

Form.Label = StyledLabel
Form.Input = StyledInput
Form.Button = StyledButton
Form.ErrorText = StyledErrorText
Form.CurrencyInput = StyledCurrencyInput
export default Form
