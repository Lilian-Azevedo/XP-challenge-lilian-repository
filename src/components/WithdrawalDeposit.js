import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

let testData = { id: 1, name: 'Lilian', email: '', lastAcess: '', stocks: [{}, {}], records: [{}, {}], accountBalance: 958 };

const WithdrawalDeposit = () => {
  const history = useHistory();
  const [inputValue, setInputValue] = useState('');  

  const handleInput = ({ target: { value } }) => {
    setInputValue(value);
  }
  
  const handleOperation = ({ target: { name } }) => {
    let newAccountBalance = Number(testData.accountBalance);
    const { accountBalance, ...testReload } = testData; 
    if (name === 'deposit') {
      newAccountBalance = newAccountBalance + Number(inputValue);
// LocalStorage
      testData = {...testReload, accountBalance: newAccountBalance };
      return;
    }
    newAccountBalance = newAccountBalance - Number(inputValue);
    testData = {...testReload, accountBalance: newAccountBalance };
  }
  
  const handleClick = (event) => {
    console.log('sai da pagina');
  }

  const handleEnterClick = (event) => {
    if (event.key === 'Enter') return handleClick();
  }

  return (
    <div>
      <div>
        <button
            type="button"
            onClick={ handleOperation }
            name="deposit"
        >
            Depósito
        </button>
        <button
            type="button"
            onClick={ handleOperation }
            name="withdrawal"
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
