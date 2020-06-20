import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/auth';
import { Redirect } from 'react-router';
import { TextField, Button, Card } from '@material-ui/core';

function Register() {
  const [isRegistered, setRegistered] = useState(false);
  const [isError, setIsError] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useAuth();

  function postRegister() {
    axios
      .post('http://localhost:5000/auth/register', {
        firstName,
        lastName,
        userName,
        password,
      })
      .then((result) => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setRegistered(true);
        } else {
          setIsError(true);
        }
      })
      .then((result) => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setRegistered(true);
        } else {
          setIsError(true);
        }
      });
  }

  if (isRegistered) {
    return <Redirect to='/login' />;
  }

  return (
    <React.Fragment>
      <div>
        <br />
        <Card style={styles.card}>
          <br />
          <TextField
            style={styles.text}
            id='standard-basic'
            label='Enter Your First Name'
            variant='outlined'
            type='firstName'
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder='first name'
          />
          <br />
          <TextField
            style={styles.text}
            id='standard-basic'
            label='Enter Your Last Name'
            variant='outlined'
            type='lastName'
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder='last name'
          />
          <br />
          <TextField
            style={styles.text}
            id='standard-basic'
            label='Enter Your Email'
            variant='outlined'
            type='username'
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder='email'
          />
          <br />
          <TextField
            style={styles.text}
            id='filled-password-input'
            label='Enter Your Password'
            variant='outlined'
            type='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder='password'
          />
          <br />
          <Button variant='contained' primary={'true'} style={styles.button}>
            Register
          </Button>
          <br />
          <Button style={styles.button}>
            <Link to='/login' style={styles.link}>
              Already have an account?
            </Link>
          </Button>
        </Card>
      </div>
    </React.Fragment>
  );
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
    maxWidth: '300px',
    margin: 'auto',
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
export default Register;
