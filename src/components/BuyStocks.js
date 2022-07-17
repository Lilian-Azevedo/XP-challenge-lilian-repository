import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import usePath from '../hooks/usePath';

const listHead = ['Ação', 'Quantidade', 'Valor'];
const arrayTest = [{ name: 'Azul4', qtd: 100, value: 350, unitValue: 3.5 }]

const BuyStocks = () => {
  const { sellStocks, titleAction } = usePath();
  const history = useHistory();
  const [labelBuyOrSell, setLabelBuyOrSell] = useState('');
  const [inputQuantity, setInputQuantity] = useState('');
  const [totalValue, setTotalValue] = useState('');

  useEffect(() => {
    if (sellStocks) {
      return setLabelBuyOrSell('venda');
    }
    setLabelBuyOrSell('compra');
  }, [])
  

  const handleInput = ({ target: { value } }) => {
    const unitValue = Number(arrayTest[0].unitValue);
    const total = unitValue * Number(value);
    const convertedVlue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total);
    setInputQuantity(value);
    setTotalValue(convertedVlue);
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
        <span>{totalValue}</span>
      </div>
      <div>
        <button
            type="button"
            onClick={() => history.push('/wallet')}
        >
            Voltar
        </button>
        <button
            type="button"
            onClick={ handleClick }
        >
            { titleAction }
        </button>
      </div>
    </div>
  );
};
export default BuyStocks;
