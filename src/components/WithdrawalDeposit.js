import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { saveAccountBalance } from '../redux/actions';
import { addDepositWithdtoLocal, getLastUserAcessFromLocal, updateAccountLocalSt } from '../services/localStorage';


const WithdrawalDeposit = () => {
  const history = useHistory();
  const [inputValue, setInputValue] = useState('');
  const [user, setUser] = useState();
  const [operationType, setOperationType] = useState('');
  const dispatch = useDispatch();

  const handleInput = ({ target: { value } }) => {
    setInputValue(value);
  }
  
  const handleClick = () => {
    const { accountBalance, id } = user;
    let newAccountBalance = 0;
    if (operationType === 'Depósito') {
      addDepositWithdtoLocal({ type: 'Depósito', value: inputValue}, id);
      console.log('depo');
      newAccountBalance = accountBalance + Number(inputValue);
      updateAccountLocalSt('Depósito', inputValue, { id });
    } else {
      addDepositWithdtoLocal({ type: 'Retirada', value: inputValue}, id);
      console.log('ret');
      updateAccountLocalSt('Retirada', inputValue, { id });
      newAccountBalance = accountBalance - Number(inputValue);
    }
    dispatch(saveAccountBalance(newAccountBalance));
    history.push('/wallet');
  }

  const handleEnterClick = (event) => {
    if (event.key === 'Enter') return handleClick();
  }

 
  useEffect(() => {
    const user = getLastUserAcessFromLocal();
    setUser(user);
    dispatch(saveAccountBalance(user.accountBalance ? user.accountBalance : 0));
  }, []);
  
  return (
    <div>
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
      <div>
        <button
            type="button"
            onClick={ ({ target }) => setOperationType(target.value) }
            name="deposit"
            value="Depósito"
        >
            Depósito
        </button>
        <button
            type="button"
            onClick={ ({ target }) => setOperationType(target.value) }
            name="withdrawal"
            value="Retirada"
        >
            Retirada
        </button>
      </div>   
      {/* BOTÕES DE VOLTAR E CONFIRMAR */}
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
            disabled={ (!operationType || !inputValue) ? true : false }
        >
            Confirmar
        </button>
      </div>
    </div>
  );
};
export default WithdrawalDeposit;
