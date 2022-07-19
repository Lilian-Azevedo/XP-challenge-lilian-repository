import React from 'react';
import { getLastUserAcessFromLocal } from '../services/localStorage';

const AccountBalance = () => {

  const convertedValue = () => {
    const account = getLastUserAcessFromLocal() ? getLastUserAcessFromLocal().accountBalance : 0;
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(account));
  }

  return (
    <div>
      <h3>Saldo Disponível:</h3>
      <p>{ convertedValue() }</p>
    </div>
  )
}


export default AccountBalance;
