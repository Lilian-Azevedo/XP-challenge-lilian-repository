import React from 'react';
import AvailableStocks from '../components/AvailableStocks';
// import NavBar from '../shared/NavBar';
import UserStocks from '../components/UserStocks';
import Header from '../shared/Header';
import '../styles/wallet.css'

const WalletStocks = () => (
  <div className="wallet-page">
    <Header />
    <div className='actions'>
    <UserStocks />
    <AvailableStocks />
    {/* <NavBar /> */}

    </div>
  </div>
);

export default WalletStocks;