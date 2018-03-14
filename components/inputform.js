// @flow
import * as React from 'react'
import { Formik } from 'formik'

type State = {
	name: string,
	email: string,
	amount: number
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

export default class Form extends React.Component<State> {
    state = {
        name: '', 
        email: '', 
        amount: 0, 
    }

	validate = (values: State): Errors => {
		let errors: Errors = {}
		if (!values.email) {
			errors.email = 'Required'
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = 'Invalid email address'
		}
		return errors
	}

	onSubmit = (setSubmitting, setErrors): void => {
		(errors: Errors): void => {
			setSubmitting(false)
			setErrors(errors)
		}
	}

	render() {
		return (
			<Formik
				initialValues={{...this.state}}
				validate={this.validate}
				onSubmit={this.onSubmit}>
				{({
					values,
					errors,
					handleChange,
					handleBlur,
					handleSubmit,
                    isSubmitting,
                    touched
				}: FormProps) => (
					<form onSubmit={handleSubmit}>
						<input
							type="name"
							name="name"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
							placeholder="Jane Smith"
						/>
						{touched.name && errors.name && <div>{errors.name}</div>}

						<input
							type="email"
							name="email"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
							placeholder="alex.smith@zopa.com"
						/>
						{touched.email && errors.email && <div>{errors.email}</div>}

						<input
							type="number"
							name="amount"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.amount}
							placeholder="£ 1300"
						/>
						{touched.amount && errors.amount && <div>{errors.amount}</div>}

						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</form>
				)}
			</Formik>
		)
	}
}
