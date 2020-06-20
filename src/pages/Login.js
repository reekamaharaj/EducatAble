import React from 'react';
import {Redirect} from 'react-router-dom'
import axios from 'axios';
import { LoginUserForm } from '../components/LoginUserForm';
import { useAuth } from '../context/auth';
import { Redirect } from 'react-router';

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useAuth();

  function postLogin() {
    axios
      .post('http://localhost:5000/auth/login', {
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
      });
  }

  if (isLoggedIn){
    return <Redirect to '/' />''
  }

  return (
    <div className='LoginUserForm'>
      <LoginUserForm />
    </div>
  );
}

export default Login;
