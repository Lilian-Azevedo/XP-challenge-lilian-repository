import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

let testData = { id: 1, name: 'Lilian', email: '', lastAcess: '', stocks: [{}, {}], records: [{}, {}], accountBalance: 958 };

const WithdrawalDeposit = () => {
  const history = useHistory();
  const [inputQuantity, setInputQuantity] = useState('');
  const [testNumber, setTestNumber] = useState(0);
  const [totalValue, setTotalValue] = useState({ total: '', convertedValue: '' });
  

  const handleInput = ({ target: { value } }) => {
    const unitValue = Number(arrayTest[0].unitValue);
    const total = unitValue * Number(value);
    const convertedValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total);
    setInputQuantity(value);
    setTotalValue({ total, convertedValue });
  }
  
  const handleClick = () => {
    setTestNumber(totalValue.total);
    // history.push('/wallet');
  }

  const handleEnterClick = (event) => {
    if (event.key === 'Enter') return handleClick();
  }

  return (
    <div>    
      {/* ARÉA DE INPUT DA QUANTIDADE DE AÇÕES*/}
      <section>
        <span>Digite o valor</span>
        <input
          type="text"
          onChange={ handleInput }
          onKeyDown={ handleEnterClick }
          value={ inputQuantity }
          name="inputQuantity"
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
