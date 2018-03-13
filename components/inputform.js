// @flow
import * as React from 'react'

type State = {
    name: string, 
    email: string, 
    amount: number, 
}

export default class InputForm extends React.Component<State> {
    constructor(props) {
      super(props)
      
      this.state = { 
        name: '', 
        email: '', 
        amount: 0, 
       }
    }
  
    handleInput = (event) => 
      this.setState({ [event.target.name]: event.target.value })
  
    handleSubmit = (event) => {
      event.preventDefault()
    }
  
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <Input 
            name="name" 
            type="text" 
            label="Name" 
            value={this.state.name} 
            onChange={this.handleInput} 
          />
          <Input 
            name="email" 
            type="email" 
            label="Email" 
            value={this.state.email} 
            onChange={this.handleInput} 
          />
          <Input 
            name="amount" 
            type="number" 
            label="Amount" 
            value={this.state.amount} 
            onChange={this.handleInput} 
          />
          <input type="submit" value="Submit" />
        </form>
      )
    }
  }
  
  const Input = ({ 
    name, 
    label, 
    value, 
    onChange, 
    type, 
    ...props 
  }) => (
    <label>
    { label }
    <input {...props} />
    </label>
  )