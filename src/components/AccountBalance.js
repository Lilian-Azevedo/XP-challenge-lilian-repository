import React from 'react';

const testData = { name: 'Lilian', email: '', lastAcess: '', stocks: [{}, {}], records: [{}, {}], accountBalance: 958 };

const AccountBalance = ({ testNumber }) => {
  const convertedValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(testData.accountBalance + Number(testNumber));
  return (
    <div>
      <h3>Saldo Disponível:</h3>
      <p>{ convertedValue }</p>
    </div>
  )
}


export default AccountBalance;
