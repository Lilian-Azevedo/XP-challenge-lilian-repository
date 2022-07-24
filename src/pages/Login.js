import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveUser } from '../redux/actions/index';
import verifyValidation from '../validations/validateEmail';
import { useHistory } from 'react-router-dom';
import { addAcessUserToLocal, getLastUserAcessFromLocal } from '../services/localStorage';
import { verifyExistence } from '../services/verifyExistenceUser';
import '../styles/login.css';

const INITIAL_STATE = {
  inputEmail: '',
  inputPassword: '',
}

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userData, setUserData] = useState(INITIAL_STATE);
  const [lastUser, setLastUser] = useState('');

  useEffect(() => {
    const user = getLastUserAcessFromLocal();
    setLastUser(user);
  }, []);
  
  const handleInput = ({ target: { name, value } }) => {
    setUserData(prev => ({...prev, [name]: value }));
  }

  const handleClick = () => {
    if(!verifyValidation(userData)) {
      return alert('Você precisa informar dados válidos!');
    }
    const { inputEmail } = userData;
    dispatch(saveUser(inputEmail));
    const findUser = verifyExistence(inputEmail);
    if (findUser) {
      addAcessUserToLocal({ ...findUser, lastAcess: new Date()});
      return history.push('/wallet');
    }
    history.push('/not-found');
  }
  
  const loginLastUser = () => {
    addAcessUserToLocal({ ...lastUser, lastAcess: new Date()});
    return history.push('/wallet');
  }

  const handleEnterClick = (event) => {
    if (event.key === 'Enter') return handleClick();
  }

  const { inputEmail, inputPassword } = userData;

  return (
    <div className="general-page">
      <div>
        <h1 className='main-title home-main-title'>XPerts</h1>
      </div>
      <div>
        <h1 className='h1-title'>Acesse sua conta</h1>
      </div>

      <form className='form-login-page'>
        <div>
          <label htmlFor='email'>Email
          <input
            id='email'
            type="text"
            onChange={ handleInput }
            onKeyDown={ handleEnterClick }
            value={ inputEmail }
            name="inputEmail"
            placeholder="Email"
            autoComplete='off'
          />
          </label>
        </div>
        <div>
          <label htmlFor='senha'>Senha
          <input
            id='senha'
            data-testid="senha-input"
            type="password"
            onChange={ handleInput }
            onKeyDown={ handleEnterClick }
            value={ inputPassword }
            name="inputPassword"
            placeholder="Senha"
            autoComplete='off'
          />
          </label>
        </div>
      </form>
      <div className='section-btns'>
        <button
            type="button"
            className='button-general button--flex'
            onClick={ handleClick }
        >
        Entrar
        </button>
        <button
            type="button"
            className='button-general button--flex'
            onClick={ () => history.push('/') }
        >
        Voltar
        </button>
      </div>

      { lastUser && 
        (<div className='last-acess-container'>
          <div>
            <h1 className='h1-title'>OU</h1>
          </div>

          <div>
            <button
              className="button-last-user button-general"
              type='button'
              onClick={ loginLastUser }>Faça login como { lastUser.name }
            </button>
          </div>
        </div>)}
    </div>);
}

export default Login;
