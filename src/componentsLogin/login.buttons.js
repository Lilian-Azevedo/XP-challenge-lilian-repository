import React from 'react';
// import { saveUser } from '../redux/actions/index';
import { useHistory } from 'react-router-dom';
import { addAcessUserToLocal } from '../services/localStorage';
import { useSelector } from 'react-redux';

const LoginButtons = () => {
  const history = useHistory();
//   const dispatch = useDispatch();
  const { user: { email }, buttonLogin } = useSelector((state) => state.userReducer);

  const handleClickBack = () => {
    history.push('/');
  }

  const handleClick = () => {
    // dispatch(saveUser(email));
    addAcessUserToLocal({ user: email , acessed: new Date()});
    history.push('/investiments');
  }

  const handleEnterClick = (event) => {
    if (event.key === 'Enter') return handleClick();
  }

  return (
    <div>
        <button
            type="button"
            onClick={ handleClickBack }
        >
        Voltar
        </button>

        <button
            type="button"
            onClick={ handleClick }
            disabled={ buttonLogin }
            onKeyDown={ handleEnterClick }
        >
        Entrar
        </button>
    </div>);
}

export default LoginButtons;
