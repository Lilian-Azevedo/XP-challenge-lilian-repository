import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BuySaleStocks from './pages/BuySaleStocks';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Login from './pages/Login';
import WalletStocks from './pages/Wallet';
import WithdrawDeposit from './pages/WithdrawDeposit';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/create" component={ SignIn } />
        <Route path="/login" component={ Login } />
        <Route path="/wallet" component={ WalletStocks } />
        <Route path="/buy" component={ BuySaleStocks } />
        <Route path="/sell" component={ BuySaleStocks } />
        <Route path="/acount" component={ WithdrawDeposit } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </div>);
}

export default App;