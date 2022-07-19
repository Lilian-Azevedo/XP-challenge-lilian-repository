import React from 'react';
import { useHistory } from 'react-router-dom';
import profilePicture from '../images/profileIcon.svg';
import '../styles/header.css';

const Header = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/profile');
  };

  return (
    <div className="header">
      <span>{ }</span>
      <input
      className='filter-svg'
        name="profile-btn"
        type="image"
        onClick={ handleClick }
        src={ profilePicture }
        alt="profile"
      />
    </div>
  );
};

export default Header;
