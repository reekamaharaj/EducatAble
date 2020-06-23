import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/auth';
import { Redirect } from 'react-router';
import { TextField, Button, Card } from '@material-ui/core';

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthTokens } = useAuth();

  function postLogin() {
    axios
      .post('http://localhost:5000/api/login', {
        userName,
        password,
      })
      .then((result) => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
      });
  }

  if (isLoggedIn) {
    return <Redirect to='/' />;
  }

  return (
    <React.Fragment>
      <br />
      <Card style={styles.card}>
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
          variant='outlined'
          label='Enter Your Password'
          type='password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder='password'
        />
        <br />
        <Button variant='contained' onClick={postLogin} style={styles.button}>
          Log-in
        </Button>
        <br />
        <Button style={styles.button}>
          <Link to='/register' style={styles.link}>
            Don't have an account?
          </Link>
        </Button>
      </Card>
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

export default Login;
