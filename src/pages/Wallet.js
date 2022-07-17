import React from 'react';
import AvailableStocks from '../components/AvailableStocks';
import NavBar from '../components/NavBar';
import UserStocks from '../components/UserStocks';
import Header from '../shared/Header';

const WalletStocks = () => (
  <div className="details-page">
    <Header />
    <UserStocks />
    <AvailableStocks />
    <footer>
      <NavBar />
    </footer>
  </div>
);

export default WalletStocks;