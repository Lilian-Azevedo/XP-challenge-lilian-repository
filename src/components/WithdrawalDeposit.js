import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { saveAccountBalance } from '../redux/actions';
import { transformToJSValue } from '../services/functions';
import { addDepositWithdtoLocal, getLastUserAcessFromLocal } from '../services/localStorage';
import '../styles/withdrDeposit.css';

const WithdrawalDeposit = () => {
  const history = useHistory();
  const [inputValue, setInputValue] = useState('');
  const [user, setUser] = useState();
  const [operationType, setOperationType] = useState('Depósito');
  const dispatch = useDispatch();

  const handleInput = ({ target: { value } }) => {
    setInputValue(value);
  }
  
  const handleClick = () => {
    const { accountBalance, id } = user;
    let newAccountBalance = 0;
    const transformValue = transformToJSValue(inputValue);
    if (operationType === 'Depósito') {
      addDepositWithdtoLocal({ type: 'Depósito', value: transformValue}, id);
      newAccountBalance = accountBalance + Number(transformValue);
    } else {
      addDepositWithdtoLocal({ type: 'Retirada', value: transformValue}, id);
      newAccountBalance = accountBalance - Number(transformValue);
    }
    dispatch(saveAccountBalance(newAccountBalance));
    history.push('/historic');
  }

  const handleEnterClick = (event) => {
    if (event.key === 'Enter') return handleClick();
  }

 
  useEffect(() => {
    const user = getLastUserAcessFromLocal();
    setUser(user);
    if (user) {
      dispatch(saveAccountBalance(user.accountBalance ? user.accountBalance : 0));
    }
  }, []);
  
  return (
    <div className='container-withdrawal'>
      {/* ARÉA DE INPUT DA QUANTIDADE DE AÇÕES*/}
      <section>
        <span>Digite o valor</span>
        <input
          type="text"
          onChange={ handleInput }
          onKeyDown={ handleEnterClick }
          value={ inputValue }
          name="inputValue"
          placeholder="Informe o valor em reais"
        />
      </section>
      {/* ARÉA DE ESCOLHA RETIRADA OU DEPOS*/}
      <div className='area-buttons-withdrD'>
        <button
            type="button"
            onClick={ ({ target }) => setOperationType(target.value) }
            name="deposit"
            value="Depósito"
            className={ operationType=== 'Depósito'
              ? 'button--flex transaction-active'
              :  'button-general button--flex'}
        >
            Depósito
        </button>
        <button
            type="button"
            onClick={ ({ target }) => setOperationType(target.value) }
            name="withdrawal"
            value="Retirada"
            className={ operationType=== 'Retirada'
              ? 'button--flex transaction-active'
              :  'button-general button--flex'}
        >
            Retirada
        </button>
      </div>   
      {/* BOTÕES DE VOLTAR E CONFIRMAR */}
      <div className='section-btns'>
        <button
            type="button"
            onClick={ handleClick }
            disabled={ (!operationType || !inputValue) ? true : false }
            className='button-general button--flex'
        >
            Confirmar
        </button>
        <button
            type="button"
            onClick={() => history.push('/wallet')}
            className='button-general button--flex'
        >
            Voltar
        </button>
      </div>
    </div>
  );
};
export default WithdrawalDeposit;



