import React from 'react';
import AccountBalance from '../components/AccountBalance';
import WithdrawalDeposit from '../components/WithdrawalDeposit';
import Header from '../shared/Header';

const WithdrawDeposit = () => (
  <div className="general-page">
    <Header />
    <AccountBalance />
    <WithdrawalDeposit />
  </div>
);

export default WithdrawDeposit;