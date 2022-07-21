import React, { useState } from 'react';
import * as Unicons from '@iconscout/react-unicons';
import '../styles/navBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [showed, setShowed] = useState(false);

    return (
      <nav className="nav container">
        { showed
        ?(<div className="nav_menu" id="nav-menu">
          <ul className="nav_list grid">

            <li className="nav_item">
              <Link to="/user">
                <Unicons.UilUser size="30" color="#E4B600"/>
              </Link>
              Usuário
            </li>

            <li className="nav_item">
              <Link to="/acount">
                <Unicons.UilMoneyWithdraw size="30" color="#E4B600"/>
              </Link>
              Conta
            </li>

            <li className="nav_item">
              <Link to="/wallet">
                <Unicons.UilWallet size="30" color="#E4B600"/>
              </Link>
              Carteira de ações
            </li>

            <li className="nav_item">
              <Link to="/">
                <Unicons.UilSignOutAlt size="30" color="#E4B600" />
              </Link>
              Sair
            </li>
          </ul>
          <div onClick={() => setShowed(false)} className='nav_close'>
            <Unicons.UilMultiply  size="30" color="#E4B600" />
          </div>
        </div>)
        :(<div className="nav_btns" onClick={() => setShowed(true)}>
          <Unicons.UilApps size="30" color="#E4B600" />
        </div>)}
      </nav>
    )
}

export default NavBar;