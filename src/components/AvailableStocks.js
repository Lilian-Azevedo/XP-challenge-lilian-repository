import React from 'react';

const listHead = ['Ação', 'Quantidade', 'Valor', 'Negociar'];
const arrayTest = [{ name: 'Azul4', qtd: 100, value: 350 }, { name: 'Petr4', qtd: 150, value: 350 }, { name: 'Vale4',  qtd: 100, value: 350 }, { name: 'Petr4',  qtd: 100, value: 350 }]

const AvailableStocks = () => {
    return (
      <div>
        <h1>Available</h1>
        <div>
            <table>
            <thead>
            <tr>
                {listHead.map(item => (<th>{ item }</th>))}
            </tr>
            </thead>
            <tbody>
            {arrayTest
                .map(({ name, qtd, value }, index) => (
                <tr key={ index }>
                    <td>{ name }</td>
                    <td>{ qtd }</td>
                    <td>{ value }</td>
                    <td>
                    <button
                        type="button"
                        // onClick={  }
                    >
                        C
                    </button>
                    <button
                        type="button"
                        // onClick={ }
                    >
                        V
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
      </div>
    )
}

export default AvailableStocks;