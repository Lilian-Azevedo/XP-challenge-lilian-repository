import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="page-not-found">
      <div>
        <h1>404</h1>
        <h2>Parece que a página que está procurando não existe!</h2>
        <h3>Se você faz parte do XP Actioners, crie uma conta!</h3>
      </div>

      <div>
        <Link to="/">
            <button type="button">Voltar</button>
        </Link>
        <Link to="/create">
            <button type="button">Cadastrar</button>
        </Link>
      </div>
    </div>);
}

export default NotFound