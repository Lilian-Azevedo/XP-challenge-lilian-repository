import React from 'react';
import AccountBalance from '../components/AccountBalance';
import NavBar from '../components/NavBar';
import Header from '../shared/Header';

const WithdrawDeposit = () => (
  <div className="details-page">
    <Header />
    <AccountBalance />
    <NavBar />
  </div>
);

export default WithdrawDeposit;