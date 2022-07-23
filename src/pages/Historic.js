import React from 'react';
import { useHistory } from 'react-router-dom';
import LastTransations from '../components/LastTransations';
import walletPicture from '../images/wallet.png';
import '../styles/header.css';

const Historic = () => (
    <div className="wallet-page">
        <Header />
        <LastTransations />
    </div>
)

export default Historic;