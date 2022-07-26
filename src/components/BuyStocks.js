import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import usePath from '../hooks/usePath';
import mockListStocks from '../mocks/mockListStocks';
import { recordStock, saveAccountBalance } from '../redux/actions';
import { getLastUserAcessFromLocal, updateAccountLocalSt, updateDataUserLocalSt } from '../services/localStorage';
import AccountBalance from './AccountBalance';
import BodyInfoStock from './BodyInfoStock';
import '../styles/buySell.css';
import verifyAccountValue from '../validations/valdateAccountBalance';

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
    if (user) dispatch(saveAccountBalance(user.accountBalance ? user.accountBalance : 0));

    const getDataAPI = async () => {
      // const response = await fetch(endpoint);
      // const results = await response.json();
      const results = sellStocks
        ? user.recordsStocks.find(({ id }) => id === Number(idPath)) // use records
        : mockListStocks.find(({ id }) => id === Number(idPath)); // use mock
      setData([results]);
      dispatch(recordStock(results));
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
    const isOKBuySell = verifyAccountValue(data[0], inputQuantity, user, sellStocks, totalValue);
    let purchaseUpdate = 0;
    if (isOKBuySell) {
      return alert('Você não pode realizar essa operação, verifique as informações!');
    }
    if (sellStocks) {
      purchaseUpdate = Number(data[0].qtdPurchased) - Number(inputQuantity);
    } else {
      const existRecord = user.recordsStocks.find(({ id }) => id === data[0].id);
      purchaseUpdate = existRecord ? Number(existRecord.qtdPurchased) + Number(inputQuantity) : inputQuantity;
    }

    updateAccountLocalSt(labelBuyOrSell, totalValue.total, user);
    updateDataUserLocalSt({...data[0], qtdPurchased: purchaseUpdate}, user.id);
    alert(`Você acaba de ${titleAction} ${inputQuantity } ${Number(inputQuantity) === 1? 'ação' : 'ações'} dessa empresa!`);
    return history.push('/wallet');
  }

  const handleEnterClick = (event) => {
    if (event.key === 'Enter') return handleClick();
  }

  return (
    <div className='container-buy-sell'>
      <h1 className='h1-title'>{ titleAction } Ação</h1>
      {/* ARÉA DE INFORMAÇÕES DA AÇÃO*/}
      <section className='container-table'>
        <table>
          <thead>
            <tr className='container-head-buy-sell'>
            {listHead.map(item => (<th key={ item }>{ item }</th>))}
            </tr>
          </thead>
          <BodyInfoStock />
        </table>
      </section>
      {/* ARÉA DE INPUT DA QUANTIDADE DE AÇÕES*/}
      <section>
        {/* <span>Quantidade</span> */}
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
      <div className='container-total-value'>
        <h2>Total da { labelBuyOrSell }:</h2>
        <span data-testid='totalValue'>{ totalValue.convertedValue }</span>
      </div>
      {/* BOTÕES DE VOLTAR E COMPRAR/VENDER */}
      <div className='section-btns btns-buy-sell'>
        <button
            type="button"
            onClick={ handleClick }
            disabled={ !inputQuantity }
            className='button-general button--flex'
        >
            { titleAction }
        </button>
        <button
            type="button"
            onClick={() => history.push('/wallet')}
            className='button-general button--flex'
        >
            Voltar
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
