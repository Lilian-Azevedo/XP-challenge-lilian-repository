import React from 'react';
import { useHistory } from 'react-router-dom';
// import profilePicture from '../images/profileIcon.svg';

const Header = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/profile');
  };

  return (
    <div className="header">
      <span>Usuário: Lilian</span>
      <input
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
