import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import FAQ from './pages/FAQ';
import Nav from './components/Nav';
import { Button } from '@material-ui/core';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route component={FAQ} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
