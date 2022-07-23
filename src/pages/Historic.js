import React from 'react';
import LastTransations from '../components/LastTransations';
import Header from '../shared/Header';
import '../styles/header.css';

const Historic = () => (
    <div className="wallet-page">
        <Header />
        <LastTransations />
    </div>
)

export default Historic;