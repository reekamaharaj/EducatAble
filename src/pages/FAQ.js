import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

function logOut(){
  axios
  .post("/auth/logout")
  .then((result) => { 
      const data = result.data;
      if (result.status === 200) {
          setIsError(false);
          console.log(data);
          return setResText(data);
      } else {
          setIsError(true);
          return setResText("Not logged in, you can't log out.");
      }
  });
  }

function FAQ(props) {

  return (
    <div>
      <div>FAQ Page</div>
      <Button onClick={logOut}>Log Out</Button>
    </div>
  );
}

export default FAQ;

