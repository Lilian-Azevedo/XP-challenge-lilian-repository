import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import verifyValidation from '../validations/validateEmail';
import { addAcessUserToLocal } from '../services/localStorage';
import { disabledButton } from '../redux/actions';

const INITIAL_STATE = {
  inputEmail: '',
  inputPassword: '',
}

const InputLogin = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(INITIAL_STATE);

  useEffect(() => {
    if(verifyValidation(userData)) {
      dispatch(disabledButton(false));
      return;
    }
    dispatch(disabledButton(true))
  }, [userData]);
  
  const handleInput = ({ target: { name, value } }) => {
    setUserData(prev => ({...prev, [name]: value }));
  }

  const handleEnterClick = (event) => {
    if (event.key === 'Enter') return handleClick();
  }

  const { inputEmail, inputPassword } = userData;

  return (
    <section>
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
   );
}

export default InputLogin;

