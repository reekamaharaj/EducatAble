import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import FAQ from './pages/FAQ';
import Nav from './components/Nav';
import { AuthContext } from './context/auth';
import PrivateRoute from './PrivateRoute';

function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem('tokens') || '{}');
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };
  return (

    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <PrivateRoute path='/FAQ' component={FAQ} />
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>

  );
}

export default App;
