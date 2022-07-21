import React from 'react';
import { useHistory } from 'react-router-dom';
import walletPicture from '../images/wallet.png';
import '../styles/home.css';
import '../styles/header.css';

const Home = () => {
  const history = useHistory();

  return (
    <div className="home-page">
      <div>
        <h1 className='main-title'>XP Actioners</h1>
      </div>
      <div>
        <input
          className='filter-svg big-picture'
          name="wallet"
          type="image"
          src={ walletPicture }
          alt="home Page"
        />
      </div>
      <div className='section-btns'>
        <button className='button-general button--flex' onClick={ () => history.push('/login') }>Faça Login</button>
        <button className='button-general button--flex' onClick={ () => history.push('/create') }>Crie uma conta</button>
      </div>
    </div>
  );
}

export default Home;