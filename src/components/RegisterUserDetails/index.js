import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { TextField, Button, Card } from '@material-ui/core';

export class RegisterUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <div>
          <br />
          <Card style={styles.card}>
            <form className={values.root} noValidate autoComplete='off'>
              <br />
              <TextField
                style={styles.text}
                id='standard-basic'
                label='Enter Your First Name'
                variant='outlined'
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
              />
              <br />
              <TextField
                style={styles.text}
                id='standard-basic'
                label='Enter Your Last Name'
                variant='outlined'
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
              />
              <br />
              <TextField
                style={styles.text}
                id='standard-basic'
                label='Enter Your Email'
                variant='outlined'
                onChange={handleChange('email')}
                defaultValue={values.email}
              />
              <br />
              <TextField
                style={styles.text}
                id='filled-password-input'
                label='Enter Your Password'
                variant='outlined'
                onChange={handleChange('password')}
                defaultValue={values.password}
              />
              <br />
              <Button
                variant='contained'
                label='Continue'
                primary={'true'}
                style={styles.button}
                onClick={this.continue}
              >
                Register
              </Button>
              <br />
              <Button style={styles.button}>
                <Link to='/login' style={styles.link}>
                  Already have an account?
                </Link>
              </Button>
            </form>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}
const styles = {
  button: {
    margin: 10,
    background: 'linear-gradient(45deg, #254E58 30%, #88BDBC 90%)',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
  },

  card: {
    boxSizing: 'border-box',
    maxWidth: '350px',
    margin: 'auto',
    padding: '0 2rem',
    display: 'flex',
    textAlign: 'center',
  },

  text: {
    margin: 15,
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
};
export default RegisterUserDetails;
