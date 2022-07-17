import React from 'react';
import '../styles/card.css';

const Card = (infoStock) => {
  const  { name, qtd, value } = infoStock;

  return (
    <div class="card_data">
        <h3 class="card_title">{ name }</h3>
        <p class="card_description">{ qtd }</p>
        <p class="card_description">{ value }</p>

        <button class="button button--flex">
            C/V
        </button>
    </div>
  )
}

export default Card;