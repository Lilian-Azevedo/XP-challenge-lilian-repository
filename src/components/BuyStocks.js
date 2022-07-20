import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import usePath from '../hooks/usePath';
import mockListStocks from '../mocks/mockListStocks';
import { recordStock } from '../redux/actions';
import { getLastUserAcessFromLocal } from '../services/localStorage';
import AccountBalance from './AccountBalance';
import BodyInfoStock from './BodyInfoStock';;

const listHead = ['Ação', 'Quantidade', 'Valor'];

const convertValue = (total) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total);
};

const BuyStocks = () => {
  const { sellStocks, titleAction, id: idPath } = usePath();
  const dispatch = useDispatch();
  const history = useHistory();
  const [labelBuyOrSell, setLabelBuyOrSell] = useState('');
  const [data, setData] = useState([]);
  const [userBalance, setUserBalance] = useState([]);
  const [inputQuantity, setInputQuantity] = useState('');
  const [totalValue, setTotalValue] = useState({ total: '', convertedValue: convertValue(0) });

  useEffect(() => {
    const user = getLastUserAcessFromLocal();
    setUserBalance(user.accountBalance);
    if (sellStocks) {
      return setLabelBuyOrSell('venda');
    }
    setLabelBuyOrSell('compra');
    const getDataAPI = async () => {
      // const response = await fetch(endpoint);
      // const results = await response.json();
      const results = mockListStocks.find(({ id }) => id === Number(idPath)); // use mock
      setData([results]);
      dispatch(recordStock(results));
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
      console.log('vendeu');
      return;
    }
    if (userBalance < totalValue.total) {
      console.log('tá pobre mano');
    }
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
            {listHead.map(item => (<th key={ item }>{ item }</th>))}
            </tr>
          </thead>
          <BodyInfoStock />
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
