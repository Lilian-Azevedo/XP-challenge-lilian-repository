import React from 'react';
import AvailableStocks from '../components/AvailableStocks';
import NavBar from '../shared/NavBar';
import UserStocks from '../components/UserStocks';
import Header from '../shared/Header';

const WalletStocks = () => (
  <div className="general-page">
    <Header />
    <UserStocks />
    <AvailableStocks />
    <NavBar />
  </div>
);

export default WalletStocks;