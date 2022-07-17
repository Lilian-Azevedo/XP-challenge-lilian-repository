import React from 'react';
import AvailableStocks from '../components/AvailableStocks';
import UserStocks from '../components/UserStocks';

const WalletStocks = () => (
  <div className="details-page">
    <UserStocks />
    <AvailableStocks />
  </div>
);

export default WalletStocks;