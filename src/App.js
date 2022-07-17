import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import mainPage from './pages/mainPage';
// import createUser from './pages/createUser';
import Login from './pages/Login';
import WalletStocks from './pages/Wallet';

function App() {
  return (
    <div>
      <Switch>
        {/* <Route exact path="/" component={ mainPage } /> */}
        {/* <Route path="/create" component={ createUser } /> */}
        <Route exact path="/" component={ Login } />
        <Route path="/wallet" component={ WalletStocks } />
        
      </Switch>
    </div>);
}

export default App;