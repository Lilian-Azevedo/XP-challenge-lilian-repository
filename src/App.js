import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import mainPage from './pages/mainPage';
// import createUser from './pages/createUser';
import login from './pages/login';

function App() {
  return (
    <div>
      <Switch>
        {/* <Route exact path="/" component={ mainPage } /> */}
        {/* <Route path="/create" component={ createUser } /> */}
        <Route path="/" component={ login } />
        <Route path="/wallet" component={ wallet } />
      </Switch>
    </div>);
}

export default App;