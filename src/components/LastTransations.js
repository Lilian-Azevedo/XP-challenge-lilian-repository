import React from 'react'

const arrayTest = [{ date: '27/03/2022', operationType: 'Depósito', value: 600 }, { date: '15/06/2022', operationType: 'Retirada', value: 200 }];
const listHead = ['Data', 'Tipo', 'Valor'];

const LastTransations = () => {
  return (
    <div className='user-actions'>
        <h1 className='h1-title'>Histórico de transações</h1>
        <table>
          <thead>
            <tr>
            {listHead.map(item => (<th>{ item }</th>))}
            </tr>
          </thead>
          <tbody>
            {arrayTest
                .map(({ date, operationType, value }, index) => (
                <tr key={ index }>
                    <td>{ date }</td>
                    <td>{ operationType }</td>
                    <td>{ value }</td>
                </tr>
                ))}
          </tbody>
        </table>
    </div>
  )
}

export default LastTransations;