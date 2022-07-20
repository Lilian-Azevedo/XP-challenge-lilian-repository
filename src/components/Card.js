import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/card.css';

const convertValue = (total) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total);
};

const Card = (infoStock) => {
  const  { cd_acao, vl_fechamento, qtdPurchased, id } = infoStock;
  const history = useHistory();

  const saveStock = (path) => {

    return history.push(path);
  }

  return (
    <div class="card_data">
        <h3 class="card_title">{ cd_acao }</h3>
        <p class="card_description">{ qtdPurchased }</p>
        <p class="card_description">{ convertValue((Number(vl_fechamento) * Number(qtdPurchased))) }</p>
        <div>
          <button class="button button--flex" onClick={() => saveStock(`/buy/${id}`)}>
            C
          </button>
          <button class="button button--flex" onClick={() => saveStock(`/sell/${id}`)}>
            V
          </button>
        </div>
    </div>
  )
}

export default Card;