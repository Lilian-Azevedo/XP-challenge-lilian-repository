import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  return (
    <div className="details-page">
      <div>
        <h1>XP Actioners</h1>
      </div>
      <div>
        <h1>Desenho</h1>
      </div>
      <div>
        <button onClick={ () => history.push('/login') }>Faça Login</button>
        <button onClick={ () => history.push('/create') }>Crie uma conta</button>
      </div>
    </div>
  );
}

export default Home;