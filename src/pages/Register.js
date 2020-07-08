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

    const passCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    function postRegister() {
        if (!password.match(passCheck)) {
            alert(
                'password password between 7 to 15 characters which contain at least one numeric digit and a special character'
            );
        } else {
            alert('Registered!');
        }
        if (!email.match(emailCheck)) {
            alert("This isn't a valid email");
        } else {
            axios
                .post('/auth/register', {
                    email,
                    password
                })
                .then((result) => {
                    const token = result.data;
                    if (result.status === 200) {
                        return setToken(token);
                    } else {
                        return console.log('nothing happened');
                    }
                });
        }
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
                                onClick={postRegister}>
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
