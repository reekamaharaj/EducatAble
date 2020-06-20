import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { useAuth } from '../context/auth';

function FAQ(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <div>
      <div>FAQ Page</div>
      <Button onClick={logOut}>Log Out</Button>
    </div>
  );
}

export default FAQ;
