import React from 'react';
import availableStocks from '../components/availableStocks';
import userStocks from '../components/userStocks';
// import '../styles/details.css';
// import Ingredients from '../components/tryComponentization';

const WalletStocks = () => (
  <div className="details-page">
    <userStocks />
    <availableStocks />
  </div>
);

export default WalletStocks;