import React, { useEffect, useState } from 'react'
import { convertedValue, formatDate, formatDoneDate } from '../services/functions';
import { getLastUserAcessFromLocal } from '../services/localStorage';

const listHead = ['Data', 'Tipo', 'Valor'];

const LastTransations = () => {
  const [userOp, setUserOp] = useState([]);
  useEffect(() => {
    const user = getLastUserAcessFromLocal();
    if (user.financialTransactions) {
      setUserOp(user.financialTransactions);
    }
  }, []);

  return (
    <div className='actions general-flex'>
        <h1 className='h1-title'>Histórico de transações</h1>
        <table style={{ width:'100vw'}}>
          <thead>
            <tr>
            {listHead.map(item => (<th className='list-thead' key={item}>{ item }</th>))}
            </tr>
          </thead>
          <tbody>
            {userOp
                .map(({ donedAt, type, value }, index) => (
                <tr key={ index }>
                    <td>{ formatDate(donedAt) }</td>
                    <td>{ type }</td>
                    <td>{ convertedValue(value) }</td>
                </tr>
                ))}
          </tbody>
        </table>
    </div>
  )
}

export default LastTransations;