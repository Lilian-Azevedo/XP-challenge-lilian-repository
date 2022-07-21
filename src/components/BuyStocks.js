import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import usePath from '../hooks/usePath';
import mockListStocks from '../mocks/mockListStocks';
import { recordStock, saveAccountBalance } from '../redux/actions';
import { getLastUserAcessFromLocal, updateAccountLocalSt, updateDataUserLocalSt } from '../services/localStorage';
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
  const [user, setUser] = useState([]);
  const [inputQuantity, setInputQuantity] = useState('');
  const [totalValue, setTotalValue] = useState({ total: '', convertedValue: convertValue(0) });

  useEffect(() => {
    const user = getLastUserAcessFromLocal();
    setUser(user);
    const getDataAPI = async () => {
      // const response = await fetch(endpoint);
      // const results = await response.json();
      const results = sellStocks
        ? user.recordsStocks.find(({ id }) => id === Number(idPath)) // use records
        : mockListStocks.find(({ id }) => id === Number(idPath)); // use mock
      setData([results]);
      dispatch(recordStock(results));
      dispatch(saveAccountBalance(user.accountBalance ? user.accountBalance : 0));
    };
    getDataAPI();
    if (sellStocks) {
      return setLabelBuyOrSell('venda');
    }
    setLabelBuyOrSell('compra');
  }, [])

  const handleInput = ({ target: { value } }) => {
    const unitValue = data[0].vl_fechamento;
    const total = unitValue * value;
    setInputQuantity(value);
    setTotalValue({ total, convertedValue: convertValue(total) });
  }
  
  const handleClick = () => {
    if (sellStocks) {
      if (Number(data[0].qtdPurchased) < Number(inputQuantity)) {
        return alert('Você não possui ações suficientes para essa venda!');
      }
      const purchase = Number(data[0].qtdPurchased) - Number(inputQuantity);
      updateDataUserLocalSt('recordsStocks', {...data[0], qtdPurchased: purchase}, user);
      updateAccountLocalSt('venda', totalValue.total, user);
      alert(`Você acaba de vender ${inputQuantity } ${Number(inputQuantity) === 1? 'ação' : 'ações'} dessa empresa`);
      history.push('/wallet');
      return;
    }
    if (user.accountBalance < totalValue.total) {
      return alert('Você não possui saldo suficiente para essa compra!');
    }
    const purchase = data[0].qtdPurchased ? Number(data[0].qtdPurchased) + Number(inputQuantity) : Number(inputQuantity);
    updateDataUserLocalSt('recordsStocks', {...data[0], qtdPurchased: purchase}, user);
    updateAccountLocalSt('compra', totalValue.total, user);
    alert(`Parabéns, você acaba de comprar 
    ${inputQuantity } ${Number(inputQuantity) === 1? 'ação' : 'ações'} dessa empresa!`);
    history.push('/wallet');
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
            disabled={ !inputQuantity }
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
