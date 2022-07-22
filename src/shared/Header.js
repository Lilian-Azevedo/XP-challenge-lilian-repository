import React from 'react';
import { useHistory } from 'react-router-dom';
import profilePicture from '../images/profileIcon.svg';
import { getLastUserAcessFromLocal } from '../services/localStorage';
import '../styles/header.css';
import NavBar from './NavBar';

const Header = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/profile');
  };

  const getLastUser = () => {
    const user = getLastUserAcessFromLocal();
    if (user) {
      return user.name;
    }
    return '';
  }

  return (
    <header className="header">
      <NavBar />
      <div>
        <span>{ getLastUser() }</span>
        <input
          className='filter-svg'
          name="profile-btn"
          type="image"
          onClick={ handleClick }
          src={ profilePicture }
          alt="profile"
        />

      </div>
    </header>
  );
};

export default Header;
