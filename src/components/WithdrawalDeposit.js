import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { saveAccountBalance } from '../redux/actions';
import { addDepositWithdtoLocal } from '../services/localStorage';

let testData = { id: 1, name: 'Lilian', email: '', lastAcess: '', stocks: [{}, {}], records: [{}, {}], accountBalance: 958 };

const WithdrawalDeposit = () => {
  const history = useHistory();
  const [inputValue, setInputValue] = useState(0);
  const [data, setData] = useState();
  const dispatch = useDispatch();

  const handleInput = ({ target: { value } }) => {
    setInputValue(value);
  }
  
  const handleOperation = ({ target: { value } }) => {
    const { accountBalance, id, ...infoUser } = user;
    let newAccountBalance = 0;
    if (value === 'Depósito') {
      addDepositWithdtoLocal({ type: 'Depósito', value: inputValue}, id);
      newAccountBalance = accountBalance + Number(inputValue);
    } else {
      addDepositWithdtoLocal({ type: 'Retirada', value: inputValue}, id);
      newAccountBalance = accountBalance - Number(inputValue);
    }
    dispatch(saveAccountBalance(newAccountBalance));
  }
  
  const handleClick = (event) => {
    console.log('sai da pagina');
  }

  const handleEnterClick = (event) => {
    if (event.key === 'Enter') return handleClick();
  }

 
  useEffect(() => {
    const user = getLastUserAcessFromLocal();
    setData(user);
    dispatch(saveAccountBalance(user.accountBalance ? user.accountBalance : 0));
  }, []);
  

  

  return (
    <div>
      <div>
        <button
            type="button"
            onClick={ handleOperation }
            name="deposit"
            value="Depósito"
        >
            Depósito
        </button>
        <button
            type="button"
            onClick={ handleOperation }
            name="withdrawal"
            value="Retirada"
        >
            Retirada
        </button>
      </div>   
      {/* ARÉA DE INPUT DA QUANTIDADE DE AÇÕES*/}
      <section>
        <span>Digite o valor</span>
        <input
          type="text"
          onChange={ handleInput }
          onKeyDown={ handleEnterClick }
          value={ inputValue }
          name="inputValue"
          placeholder="Informe quantas ações"
        />
      </section>
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
            Confirmar
        </button>
      </div>
    </div>
  );
};
export default WithdrawalDeposit;
