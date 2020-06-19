import React, { Component } from 'react';
import './style.css';
import { TextField, AppBar, Button } from '@material-ui/core';
import Modal from '../Modal';

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <Modal>
          <AppBar title='Enter User Details' />
          <form className={values.root} noValidate autoComplete='off'>
            <TextField
              id='standard-basic'
              label='Enter Your First Name'
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
            />
            <br />
            <TextField
              id='standard-basic'
              label='Enter Your Last Name'
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
            />
            <br />
            <TextField
              id='standard-basic'
              label='Enter Your Email'
              onChange={handleChange('email')}
              defaultValue={values.email}
            />
            <br />
            <Button
              variant='contained'
              color='secondary'
              label='Continue'
              primary={'true'}
              style={styles.button}
              onClick={this.continue}
            >
              Continue
            </Button>
          </form>
        </Modal>
      </React.Fragment>
    );
  }
}
const styles = {
  button: {
    margin: 15,
  },
};
export default FormUserDetails;
