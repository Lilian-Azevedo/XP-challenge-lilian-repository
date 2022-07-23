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
      <h4>Saldo Disponível:</h4>
      <h4>{ data }</h4>
    </div>
  )
}


export default AccountBalance;
