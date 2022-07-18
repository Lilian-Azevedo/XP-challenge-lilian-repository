import React from 'react';
import BuyStocks from '../components/BuyStocks';
import NavBar from '../shared/NavBar';
import Header from '../shared/Header';

const BuySaleStocks = () => (
  <div className="details-page">
    <Header />
    <BuyStocks />
    <NavBar />
  </div>
);

export default BuySaleStocks;