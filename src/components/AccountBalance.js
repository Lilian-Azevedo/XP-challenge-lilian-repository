import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { convertedValue } from '../services/functions';

const AccountBalance = () => {
  const [data, setData] = useState(convertedValue(0));
  const { accountBalance } = useSelector(state => state.walletReducer);

  useEffect(() => {
    setData(convertedValue(accountBalance));
  }, [accountBalance]);
  

  return (
    <div className='container-account-balance'>
      <h3>Saldo Disponível: </h3>
      <p>{ data }</p>
    </div>
  )
}


export default AccountBalance;
