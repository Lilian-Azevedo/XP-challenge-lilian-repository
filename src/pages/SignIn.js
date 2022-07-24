import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { generateId, transformToJSValue } from '../services/functions';
import { addDepositWithdtoLocal, addNewUserToLocal } from '../services/localStorage';
import verifyValidation from '../validations/validateEmail';
import '../styles/signIn.css';

const INITIAL_STATE = {
  inputName: '',
  inputEmail: '',
  inputPassword: '',
  inputValueInitial: '',
}

const SignIn = () => {
  const [userData, setUserData] = useState(INITIAL_STATE);
  const [disableInput, setDisableInput] = useState(true);
  const history = useHistory();

  const handleInput = ({ target: { name, value } }) => {
    setUserData(prev => ({...prev, [name]: value }));
  }

  const onChangeAddValue = ({ target: { value } }) => {
    if (value === 'yes') return setDisableInput(false);
    setDisableInput(true);
  }

  const handleClick = () => {
    if(!verifyValidation(userData)) {
      return alert('Você precisa informar dados válidos!');
    }
    const userId = generateId();
    addNewUserToLocal({ id: userId, ...userData});
    if (inputValueInitial) {
      const transformValue = transformToJSValue(inputValueInitial);
      addDepositWithdtoLocal({ type: 'Depósito', value: transformValue}, userId);
    }
    history.push('/wallet');
  }

  const handleEnterClick = (event) => {
    if (event.key === 'Enter') return handleClick();
  }

  const { inputName, inputEmail, inputPassword, inputValueInitial } = userData;

  return (
    <div className="general-page">
      <div>
        <h1 className='main-title home-main-title'>XPerts</h1>
      </div>
      <div>
        <h1 className='h1-title'>Crie a sua conta!</h1>
      </div>
  
      <section>
        <input
          type="text"
          data-testid="nome-input"
          onChange={ handleInput }
          onKeyDown={ handleEnterClick }
          value={ inputName }
          name="inputName"
          placeholder="Nome (mínimo 6 caracteres)"
        />
        <input
          type="text"
          data-testid="email-input"
          onChange={ handleInput }
          onKeyDown={ handleEnterClick }
          value={ inputEmail }
          name="inputEmail"
          placeholder="Email"
        />
        <input
          autoComplete="off"
          data-testid="senha-input"
          type="password"
          onChange={ handleInput }
          onKeyDown={ handleEnterClick }
          value={ inputPassword }
          name="inputPassword"
          placeholder="Senha (mínimo 6 caracteres)"
        />
        </section>

        <section>
          <span>Deseja adicionar algum valor agora?</span>
          <div className="container-radio-button" onChange={ onChangeAddValue }>
            <label htmlFor='yes'>
              <input type="radio" value="yes" name="addValue" id='yes' />Sim
            </label>
            <label htmlFor='no'>
              <input type="radio" value="no" name="addValue" id='no'/>Não
            </label>
          </div>
        </section>

        <div className='section-add-value'>
          <input
            // className='button-general button--flex'
            disabled={ disableInput }
            type="number"
            onChange={ handleInput }
            onKeyDown={ handleEnterClick }
            value={ inputValueInitial }
            name="inputValueInitial"
            placeholder="Digite aqui o valor"
          />
        </div>

        <div className='section-btns'>
          <button
              type="button"
              className='button-general button--flex'
              onClick={ handleClick }
              // disabled={ disableButton }
          >
          Salvar
          </button>
          <button
              type="button"
              className='button-general button--flex'
              onClick={ () => history.push('/') }
          >
          Voltar
          </button>
        </div>
    </div>
  );
};

export default SignIn;