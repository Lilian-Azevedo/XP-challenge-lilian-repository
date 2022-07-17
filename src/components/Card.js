import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/card.css';

const Card = (infoStock) => {
  const  { name, qtd, value } = infoStock;
  const history = useHistory();

  return (
    <div class="card_data">
        <h3 class="card_title">{ name }</h3>
        <p class="card_description">{ qtd }</p>
        <p class="card_description">{ value }</p>
        <div>
          <button class="button button--flex" onClick={() => history.push('/buy')}>
            +
          </button>

          <button class="button button--flex" onClick={() => history.push('/sell')}>
            -
          </button>
        </div>
    </div>
  )
}

export default Card;