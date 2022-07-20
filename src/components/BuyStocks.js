import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import usePath from '../hooks/usePath';
import mockListStocks from '../mocks/mockListStocks';
import AccountBalance from './AccountBalance';

const listHead = ['Ação', 'Quantidade', 'Valor'];
const arrayTest = [{ name: 'Azul4', qtd: 100, value: 350, unitValue: 3.5 }];

const convertValue = (total) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total);
};

const BuyStocks = () => {
  const { sellStocks, titleAction, id: idPath } = usePath();
  const history = useHistory();
  const [labelBuyOrSell, setLabelBuyOrSell] = useState('');
  const [data, setData] = useState([]);
  const [inputQuantity, setInputQuantity] = useState('');
  const [testNumber, setTestNumber] = useState(0);
  const [totalValue, setTotalValue] = useState({ total: '', convertedValue: convertValue(0) });

  useEffect(() => {
    if (sellStocks) {
      return setLabelBuyOrSell('venda');
    }
    setLabelBuyOrSell('compra');
    const getDataAPI = async () => {
      // const response = await fetch(endpoint);
      // const results = await response.json();
      const results = mockListStocks.find(({ id }) => id === Number(idPath)); // use mock
      setData([results]);
    };
    getDataAPI();
  }, [])
  

  const handleInput = ({ target: { value } }) => {
    const unitValue = data[0].vl_fechamento;
    const total = unitValue * value;
    setInputQuantity(value);
    setTotalValue({ total, convertedValue: convertValue(total) });
  }
  
  const handleClick = () => {
    if (sellStocks) {
      
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
            {data
                .map(({ id, cd_acao, vl_fechamento }) => (
                <tr key={ id }>
                    <td>{ cd_acao }</td>
                    <td>{inputQuantity ? inputQuantity : 1}</td>
                    <td>{inputQuantity
                      ? convertValue(vl_fechamento * inputQuantity)
                      : convertValue(vl_fechamento)}
                    </td>
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
        <span>{ totalValue.convertedValue }</span>
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
        <AccountBalance />
      </div>)}

    </div>
  );
};
export default BuyStocks;
