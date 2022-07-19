import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import usePath from '../hooks/usePath';
import mockListStocks from '../mocks/mockListStocks';
import AccountBalance from './AccountBalance';

const listHead = ['Ação', 'Quantidade', 'Valor'];
const arrayTest = [{ name: 'Azul4', qtd: 100, value: 350, unitValue: 3.5 }];
// let testData = { id: 1, name: 'Lilian', email: '', lastAcess: '', stocks: [{}, {}], records: [{}, {}], accountBalance: 958 };

const BuyStocks = () => {
  const { sellStocks, titleAction, id: idPath } = usePath();
  const history = useHistory();
  const [labelBuyOrSell, setLabelBuyOrSell] = useState('');
  const [data, setData] = useState([]);
  const [inputQuantity, setInputQuantity] = useState('');
  const [testNumber, setTestNumber] = useState(0);
  const [totalValue, setTotalValue] = useState({ total: '', convertedValue: '' });

  useEffect(() => {
    if (sellStocks) {
      return setLabelBuyOrSell('venda');
    }
    setLabelBuyOrSell('compra');
    const getDataAPI = async () => {
      // const response = await fetch(endpoint);
      // const results = await response.json();
      const results = mockListStocks.find(({ id }) => id === idPath); // use mock
      setData(results);
    };
    getDataAPI();
  }, [])
  

  const handleInput = ({ target: { value } }) => {
    const unitValue = Number(arrayTest[0].unitValue);
    const total = unitValue * Number(value);
    const convertedValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total);
    setInputQuantity(value);
    setTotalValue({ total, convertedValue });
  }
  
  const handleClick = () => {
    if (sellStocks) {
      // reduz
      const reduceAcoount = totalValue.total*(-1);
      setTestNumber(reduceAcoount);
    //   history.push('/wallet');
      return;
    }
    setTestNumber(totalValue.total);
    // history.push('/wallet');
  }

  const handleEnterClick = (event) => {
    if (event.key === 'Enter') return handleClick();
  }

  return (
    <div>
      <h1>{ titleAction } Ação</h1>
      {/* ARÉA DE INFORMAÇÕES DA AÇÃO*/}
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
      {/* ARÉA DE INPUT DA QUANTIDADE DE AÇÕES*/}
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
      {/* ARÉA DO VALOR TOTAL DA COMPRA/VENDA */}
      <div>
        <h2>Total da { labelBuyOrSell }:</h2>
        <span>{totalValue.convertedValue }</span>
      </div>
      {/* BOTÕES DE VOLTAR E COMPRAR/VENDER */}
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
      {/* ARÉA DO SALDO DISPONÍVEL */}
      {!sellStocks && (<div>
        <AccountBalance testNumber={ testNumber }/>
      </div>)}

    </div>
  );
};
export default BuyStocks;
