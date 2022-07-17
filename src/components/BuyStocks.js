import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import usePath from '../hooks/usePath';

const listHead = ['Ação', 'Quantidade', 'Valor'];
const arrayTest = [{ name: 'Azul4', qtd: 100, value: 350 }]

const BuyStocks = () => {
  const { sellStocks, titleAction } = usePath();
  const [inputQuantity, setInputQuantity] = useState('');
  const [labelBuyOrSell, setLabelBuyOrSell] = useState('');

  useEffect(() => {
    if (sellStocks) {
      return setLabelBuyOrSell('venda');
    }
    setLabelBuyOrSell('compra');
  }, [])
  

  const handleInput = ({ target: { value } }) => {
    setInputQuantity(value);
  }
  
  const handleClick = () => {
    history.push('/wallet');
  }

  const handleEnterClick = (event) => {
    if (event.key === 'Enter') return handleClick();
  }

  return (
    <div>
      <h1>{ titleAction } Ação</h1>
      <section>
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
                </tr>
                ))}
          </tbody>
        </table>
      </section>
      <section>
        <span>Quantidade</span>
        <input
          type="text"
          onChange={ handleInput }
          onKeyDown={ handleEnterClick }
          value={ inputQuantity }
          name="inputQuantity"
          placeholder="Informe quantas ações"
        />
      </section>
      <div>
        <h2>Total da { labelBuyOrSell }:</h2>
        <span>{}</span>
      </div>
      <div>
        <button
            type="button"
            // onClick={  }
        >
            Voltar
        </button>
        <button
            type="button"
            // onClick={ }
        >
            { titleAction }
        </button>
      </div>
    </div>
  );
};
export default BuyStocks;
