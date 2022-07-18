import React from 'react';
import BuyStocks from '../components/BuyStocks';
import NavBar from '../components/NavBar';
import Header from '../shared/Header';

const BuySaleStocks = () => (
  <div className="details-page">
    <Header />
    <BuyStocks />
    <NavBar />
  </div>
);

export default BuySaleStocks;