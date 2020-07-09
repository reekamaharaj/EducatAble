import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Card } from '@material-ui/core';

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
    logincard: {
        fontFamily: 'Roboto, sans-serif',
        boxSizing: 'border-box',
        maxWidth: '300px',
        height: '15vh',
        margin: '15vh auto',
        textAlign: 'center'
    },

    text: {
        margin: 15
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    },
    passwordInfo: {
        fontSize: '6px'
    }
};

function Login() {
    const [token, setToken] = React.useState(localStorage.getItem('token'));
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [admin, setAdmin] = React.useState('');

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

    React.useEffect(
        function () {
            if (!!email) {
                localStorage.setItem('email', email);
            } else {
                localStorage.removeItem('email');
            }
        },
        [email]
    );

    React.useEffect(
        function () {
            if (!!admin) {
                localStorage.setItem('admin', admin.toString());
            } else {
                localStorage.removeItem('admin');
            }
        },
        [admin]
    );

    function postLogin() {
        axios
            .post('/auth/login', {
                email,
                password
            })
            .then((result) => {
                const token = result.data.token;
                const email = result.data.email;
                const admin = result.data.admin;
                setToken(token);
                setAdmin(admin);
                setEmail(email);
            })
            .catch((err) => {
                alert(err.response.data);
            });
    }

    function getAdmin() {
        axios('/auth');
    }

    return (
        <>
            {guest ? (
                //Guest User!
                <>
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
                        <Button
                            variant='contained'
                            onClick={postLogin}
                            style={styles.button}>
                            Log-in
                        </Button>
                        <br />
                        <Button style={styles.button}>
                            <Link to='/register' style={styles.link}>
                                Don't have an account?
                            </Link>
                        </Button>
                    </Card>
                </>
            ) : (
                //Registered User!
                <Redirect to='/' />
            )}
        </>
    );
}

export default Login;
