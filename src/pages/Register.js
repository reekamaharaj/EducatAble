import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Card, Typography } from '@material-ui/core';

const styles = {
    button: {
        margin: 10,
        background: '#72A0C1',
        border: 0,
        borderRadius: 3,
        color: 'white',
        height: 48,
        padding: '0 30px'
    },

    card: {
        boxSizing: 'border-box',
        maxWidth: '300px',
        margin: 'auto',
        textAlign: 'center'
    },

    text: {
        margin: 15
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    }
};

function Register() {
    const [token, setToken] = React.useState(localStorage.getItem('token'));
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const guest = !token;

    React.useEffect(
        function () {
            if (!!token) {
                localStorage.setItem('token', token);
            } else {
                localStorage.removeItem('token');
            }
        },
        [token]
    );

    const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const passCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    function validation() {
        const emailVal = email.match(emailCheck);
        const passwordVal = password.match(passCheck);

        if (emailVal) {
            if (passwordVal) {
                postRegister();
            } else {
                alert('Password requirements not met.');
            }
        } else {
            alert('Email is not valid.');
        }
    }

    function postRegister() {
        axios
            .post('/auth/register', {
                email,
                password
            })
            .then((result) => {
                const token = result.data.token;
                const message = result.data.message;
                setToken(token);
                alert(message);
            })
            .catch((err) => {
                alert(err.response.data);
            });
    }

    return (
        <>
            {guest ? (
                //Guest User!
                <>
                    <div>
                        <br />
                        <Card style={styles.card}>
                            <br />
                            <TextField
                                style={styles.text}
                                id='standard-basic'
                                label='Enter Your Email'
                                variant='outlined'
                                type='username'
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
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
                            <Typography variant='caption'>
                                Password must be between 7 to 15 characters and
                                contain at least one numeric digit and a special
                                character
                            </Typography>
                            <br />
                            <Button
                                variant='contained'
                                primary={'true'}
                                style={styles.button}
                                onClick={validation}>
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
                </>
            ) : (
                //Registered User!
                <Redirect to='/' />
            )}
        </>
    );
}

export default Register;
