import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Question from './pages/Questions';
import Login from './pages/Login';
import Register from './pages/Register';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import { Button } from '@material-ui/core';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Question} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
