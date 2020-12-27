import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './pages/auth/Login.component';
import Register from './pages/auth/Register.component';
import Home from './pages/Home.component.jsx';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </div>
  );
};

export default App;
