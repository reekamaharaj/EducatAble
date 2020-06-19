import React, { Component } from 'react';
import './style.css';
import LoginUserDetails from '../LoginUserDetails';
import Confirm from '../Confirm';
// import Success from '../Success';

export class LoginUserForm extends Component {
  state = {
    step: 1,
    email: '',
    password: '',
  };

  //Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { email, password } = this.state;
    const values = { email, password };

    switch (step) {
      case 1:
        return (
          <LoginUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );

      default:
    }
  }
}

export default LoginUserForm;
