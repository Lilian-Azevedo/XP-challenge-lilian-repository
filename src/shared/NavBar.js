import React, { useState } from 'react';
import * as Unicons from '@iconscout/react-unicons';
import '../styles/navBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [showed, setShowed] = useState(window.screen.width < 768 ? false : true);

    const addNavBar = () => {
      if (window.screen.width < 768) {
        return setShowed(false);
      }
      setShowed(true);
    }

    return (
      <nav className="nav container">
        { showed
        ?(<div className="nav_menu" id="nav-menu">
          <ul className="nav_list grid">

            <li className="nav_item" onClick={ addNavBar }>
              <Link to="/login">
                <Unicons.UilUser size="30" color="#E4B600"/>
              </Link>
              Trocar Usuário
            </li>

            <li className="nav_item" onClick={ addNavBar }>
              <Link to="/account">
                <Unicons.UilMoneyWithdraw size="30" color="#E4B600"/>
              </Link>
              Depósito/
              Retirada
            </li>

            <li className="nav_item" onClick={ addNavBar }>
              <Link to="/wallet">
                <Unicons.UilWallet size="30" color="#E4B600"/>
              </Link>
              Carteira de Ações
            </li>

            <li className="nav_item" onClick={ addNavBar }>
              <Link to="/">
                <Unicons.UilSignOutAlt size="30" color="#E4B600" />
              </Link>
              Sair
            </li>

            <li className="nav_item" onClick={ addNavBar }>
              <Link to="/historic">
                <Unicons.UilHistory size="30" color="#E4B600" />
              </Link>
              Extrato
            </li>

            <li onClick={ addNavBar } className="nav_item nav_close" >
              <Unicons.UilMultiply  size="30" color="#E4B600" />
            </li>
          </ul>
          {/* <div onClick={() => setShowed(false)} className='nav_close'>
            <Unicons.UilMultiply  size="30" color="#E4B600" />
          </div> */}
        </div>)
        :(<div className="nav_btns nav_toggle" onClick={() => setShowed(true)}>
          <Unicons.UilApps size="30" color="#E4B600" />
        </div>)}
      </nav>
    )
}

export default NavBar;