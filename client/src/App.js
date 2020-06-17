import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Question from './pages/Questions';
// import Detail from "./pages/Detail";
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Question} />
          <Route exact path='/login' component={Login} />
          {/* <Route exact path="/books/:id" component={Detail} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
