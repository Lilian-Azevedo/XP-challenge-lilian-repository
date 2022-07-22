import React, { useState } from 'react';
import * as Unicons from '@iconscout/react-unicons';
import '../styles/navBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [showed, setShowed] = useState(false);

    return (
      <nav className="nav container footer_app">
        { showed
        ?(<div className="nav_menu" id="nav-menu">
          <ul className="nav_list grid">

            <li className="nav_item" onClick={() => setShowed(false)}>
              <Link to="/login">
                <Unicons.UilUser size="30" color="#E4B600"/>
              </Link>
              Trocar Usuário
            </li>

            <li className="nav_item" onClick={() => setShowed(false)}>
              <Link to="/account">
                <Unicons.UilMoneyWithdraw size="30" color="#E4B600"/>
              </Link>
              Conta
            </li>

            <li className="nav_item" onClick={() => setShowed(false)}>
              <Link to="/wallet">
                <Unicons.UilWallet size="30" color="#E4B600"/>
              </Link>
              Carteira de Ações
            </li>

            <li className="nav_item" onClick={() => setShowed(false)}>
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
        :(<div className="nav_btns nav_toggle" onClick={() => setShowed(true)}>
          <Unicons.UilApps size="30" color="#E4B600" />
        </div>)}
      </nav>
    )
}

export default NavBar;