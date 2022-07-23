import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();
  return (
    <div className="general-page">
      <div className='container-not-found'>
        <h1 className='h1-title'>404</h1>
        <h2>Parece que a página que está procurando não existe!</h2>
        <h3>Se você não faz parte do XP Actioners, crie uma conta!</h3>
      </div>

      <div className='section-btns'>
        <button
          className='button-general button--flex'
          type="button"
          onClick={() => history.push('/create')}>Cadastrar
        </button>
        <button
          className='button-general button--flex'
          type="button"
          onClick={() => history.push('/')}>Página Inicial
        </button>
      </div>
    </div>);
}

export default NotFound