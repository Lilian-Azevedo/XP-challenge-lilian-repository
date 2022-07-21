import React from 'react';
import AccountBalance from '../components/AccountBalance';
// import LastTransations from '../components/LastTransations';
import NavBar from '../shared/NavBar';
import WithdrawalDeposit from '../components/WithdrawalDeposit';
import Header from '../shared/Header';

const WithdrawDeposit = () => (
  <div className="details-page">
    <Header />
    <AccountBalance />
    <WithdrawalDeposit />
    {/* <LastTransations /> */}
    <NavBar />
  </div>
);

export default WithdrawDeposit;