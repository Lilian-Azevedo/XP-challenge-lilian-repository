import React from 'react';
import AvailableStocks from '../components/AvailableStocks';
import UserStocks from '../components/UserStocks';
// import '../styles/details.css';
// import Ingredients from '../components/tryComponentization';

const WalletStocks = () => (
  <div className="details-page">
    <UserStocks />
    <AvailableStocks />
  </div>
);

export default WalletStocks;