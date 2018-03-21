// @flow
import * as React from 'react'
import { Formik } from 'formik'
import isEmpty from 'lodash.isempty'
import Form from './styles'

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
		amount: ''
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
				component={InnerForm}
			/>
		)
	}
}

const InnerForm = ({
	values,
	errors,
	handleChange,
	handleBlur,
	handleSubmit,
	isSubmitting,
	touched
}: FormProps) => (
	<Form onSubmit={handleSubmit}>
		<Form.Label topLabel>Name</Form.Label>
		<Form.Input
			label="name"
			name="name"
			onChange={handleChange}
			onBlur={handleBlur}
			values={values.name}
			error={errors.name}
			touched={touched.name}
		/>
		{touched.name &&
			errors.name && <Form.ErrorText>{errors.name}</Form.ErrorText>}

		<Form.Label>Email</Form.Label>
		<Form.Input
			label="email"
			name="email"
			onChange={handleChange}
			onBlur={handleBlur}
			values={values.email}
			error={errors.email}
			touched={touched.email}
		/>
		{touched.email &&
			errors.email && <Form.ErrorText>{errors.email}</Form.ErrorText>}

		<Form.Label>Amount</Form.Label>
		<Form.CurrencyInput
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
			errors.amount && <Form.ErrorText>{errors.amount}</Form.ErrorText>}

		<Form.Button type="submit" disabled={isSubmitting}>
			Send
		</Form.Button>
	</Form>
)