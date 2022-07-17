import React, { useState } from 'react';
import * as Unicons from '@iconscout/react-unicons';
import '../styles/navBar.css';

const NavBar = () => {
    const [showed, setShowed] = useState(false);

    return (
      <nav class="nav container">
        { showed
        ?(<div class="nav_menu" id="nav-menu">
          <ul class="nav_list grid">

            <li class="nav_item">
              <a href="/user">
                <Unicons.UilUser size="30" color="#E4B600"/>
              </a>
              Usuário
            </li>

            <li class="nav_item">
              <a href="#skills">
                <Unicons.UilMoneyWithdraw size="30" color="#E4B600"/>
              </a>
              Retirada
            </li>

            <li class="nav_item">
              <a href="#contact">
                <Unicons.UilMoneyInsert size="30" color="#E4B600"/>
              </a>
              Depósito
            </li>

            <li class="nav_item">
              <a href="#home">
                <Unicons.UilSignOutAlt size="30" color="#E4B600" />
              </a>
              Sair
            </li>
          </ul>
          <div onClick={() => setShowed(false)} className='nav_close'>
            <Unicons.UilMultiply  size="30" color="#E4B600" />
          </div>
        </div>)
        :(<div class="nav_btns" onClick={() => setShowed(true)}>
          <Unicons.UilApps size="30" color="#E4B600" />
        </div>)}
      </nav>
    )
}

export default NavBar;