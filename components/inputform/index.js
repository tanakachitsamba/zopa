// @flow
import * as React from 'react'
import { Formik } from 'formik'
import isEmpty from 'lodash.isempty'
import CurrencyInput from 'react-currency-input'
import styled from 'styled-components'
import FormStyles from './styles'

type State = {
	[x: string]: string
}

type Errors = {
	[x: string]: string
}

type FormProps = {
	values: State,
	errors: Errors,
	handleChange: (e: React.ChangeEvent<any>) => void,
	handleBlur: (e: any) => void,
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
	isSubmitting: boolean
}

export default class InputForm extends React.Component<State> {
	state = {
		name: '',
		email: '',
		amount: '£ 0' // would be double decimal but not currently needed.
	}

	validate = (values: State): Errors => {
		let errors: Errors = {}

		if (isEmpty(values.email)) {
			errors.email = 'Please enter an email address'
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = 'Invalid email address'
		}

		if (isEmpty(values.name)) {
			errors.name = 'Please enter a name'
		} else if (!/^[A-Za-z ]+$/.test(values.name)) {
			errors.name = 'Please enter a valid name'
		}

		if (values.amount === '£ 0') {
			errors.amount = 'please enter an amont'
		}

		return errors
	}

	onSubmit = (setSubmitting, setErrors): void => {
		;(errors: Errors): void => {
			setSubmitting(false)
			setErrors(errors)
		}
	}

	render(): React.Element<any> {
		return (
			<Formik
				initialValues={{ ...this.state }}
				validate={this.validate}
				onSubmit={this.onSubmit}
				component={Form}
			/>
		)
	}
}

const Form = ({
	values,
	errors,
	handleChange,
	handleBlur,
	handleSubmit,
	isSubmitting,
	touched,
	...props
}: FormProps) => (
	<FormStyles.Form onSubmit={handleSubmit}>
		<FormStyles.Label topLabel>Name</FormStyles.Label>
		<FormStyles.Input
			label="name"
			name="name"
			onChange={handleChange}
			onBlur={handleBlur}
			values={values.name}
			error={errors.name}
			touched={touched.name}
		/>
		{touched.name &&
			errors.name && <FormStyles.ErrorText>{errors.name}</FormStyles.ErrorText>}

		<FormStyles.Label>Email</FormStyles.Label>
		<FormStyles.Input
			label="email"
			name="email"
			onChange={handleChange}
			onBlur={handleBlur}
			values={values.email}
			error={errors.email}
			touched={touched.email}
		/>
		{touched.email &&
			errors.email && <FormStyles.ErrorText>{errors.email}</FormStyles.ErrorText>}

		<FormStyles.Label>Amount</FormStyles.Label>
		<FormStyles.CurrencyInput 
			name="amount"
			value={values.amount}
			onChangeEvent={handleChange}
			onBlur={handleBlur}
			precision="0"
			prefix="£ "
			error={errors.amount}
			touched={touched.amount}
		/>
		{touched.amount &&
			errors.amount && <FormStyles.ErrorText>{errors.amount}</FormStyles.ErrorText>}

		<FormStyles.Button type="submit" disabled={isSubmitting}>
			Send
		</FormStyles.Button>
	</FormStyles.Form>
)