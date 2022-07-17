import React from 'react';
import AvailableStocks from '../components/AvailableStocks';
import UserStocks from '../components/UserStocks';
import Header from '../shared/Header';

const WalletStocks = () => (
  <div className="details-page">
    <Header />
    <UserStocks />
    <AvailableStocks />
  </div>
);

export default WalletStocks;