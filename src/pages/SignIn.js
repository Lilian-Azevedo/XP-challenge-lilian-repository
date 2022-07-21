import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { generateId } from '../services/functions';
import { addDepositWithdtoLocal, addNewUserToLocal } from '../services/localStorage';
import verifyValidation from '../validations/validateEmail';

const INITIAL_STATE = {
  inputName: '',
  inputEmail: '',
  inputPassword: '',
  inputValueInitial: 0,
}

const SignIn = () => {
  const [userData, setUserData] = useState(INITIAL_STATE);
  const [disableInput, setDisableInput] = useState(true);
  const history = useHistory();
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    if(verifyValidation(userData)) {
      setDisableButton(false);
      return;
    }
    setDisableButton(true);
  }, [userData]);

  const handleInput = ({ target: { name, value } }) => {
    setUserData(prev => ({...prev, [name]: value }));
  }

  const onChangeAddValue = ({ target: { value } }) => {
    if (value === 'yes') return setDisableInput(false);
    setDisableInput(true);
  }

  const handleClick = () => {
    const userId = generateId();
    addNewUserToLocal({ id: userId, ...userData});
    if (inputValueInitial) {
      addDepositWithdtoLocal({ type: 'Depósito', value: inputValueInitial}, userId);
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
        <h1 className='h1-title'>Crie a sua conta!</h1>
      </div>
  
      <section>
        <input
          type="text"
          onChange={ handleInput }
          onKeyDown={ handleEnterClick }
          value={ inputName }
          name="inputName"
          placeholder="Nome"
        />
        <input
          type="text"
          onChange={ handleInput }
          onKeyDown={ handleEnterClick }
          value={ inputEmail }
          name="inputEmail"
          placeholder="Email"
        />
        <input
          autoComplete="off"
          type="password"
          onChange={ handleInput }
          onKeyDown={ handleEnterClick }
          value={ inputPassword }
          name="inputPassword"
          placeholder="Senha"
        />
        </section>

        <section>
          <span>Deseja adicionar algum valor agora?</span>
          <div onChange={ onChangeAddValue }>
            <input type="radio" value="yes" name="addValue" /> Sim
            <input type="radio" value="no" name="addValue" /> Não
          </div>
          <div>
            <input
              disabled={ disableInput }
              type="number"
              onChange={ handleInput }
              onKeyDown={ handleEnterClick }
              value={ inputValueInitial }
              name="inputValueInitial"
              placeholder="Valor"
            />
          </div>
        </section>

        <div>
          <button
              type="button"
              onClick={ () => history.push('/') }
          >
          Voltar
          </button>
          <button
              type="button"
              onClick={ handleClick }
              disabled={ disableButton }
          >
          Salvar
          </button>
        </div>
    </div>
  );
};

export default SignIn;