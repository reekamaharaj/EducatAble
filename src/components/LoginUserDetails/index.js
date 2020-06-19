import React, { Component } from 'react';
import './style.css';
import { TextField, Button } from '@material-ui/core';

export class LoginUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <form className={values.root} noValidate autoComplete='off'>
          <br />
          <TextField
            id='standard-basic'
            label='Enter Your Email'
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <br />
          <TextField
            id='standard-basic'
            label='Enter Your Password'
            onChange={handleChange('password')}
            defaultValue={values.password}
          />
          <br />
          <Button
            variant='contained'
            color='primary'
            label='Continue'
            primary={'true'}
            style={styles.button}
            onClick={this.continue}
          >
            Login
          </Button>
        </form>
      </React.Fragment>
    );
  }
}
const styles = {
  button: {
    margin: 15,
  },
};
export default LoginUserDetails;
