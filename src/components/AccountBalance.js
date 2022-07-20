import React, { useEffect, useState } from 'react';
import { getLastUserAcessFromLocal } from '../services/localStorage';

const convertedValue = (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(value));

const AccountBalance = () => {
  const [data, setData] = useState(convertedValue(0));
  // 
  useEffect(() => {
    const account = getLastUserAcessFromLocal() ? getLastUserAcessFromLocal().accountBalance : 0;
    setData(convertedValue(account));
  }, [])
  

  return (
    <div>
      <h3>Saldo Disponível:</h3>
      <p>{ data }</p>
    </div>
  )
}


export default AccountBalance;
