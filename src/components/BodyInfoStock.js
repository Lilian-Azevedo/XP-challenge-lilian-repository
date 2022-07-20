import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import usePath from '../hooks/usePath';

const convertValue = (total) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total);
};

const BodyInfoStock = () => {
  const { sellStocks } = usePath();
  const [data, setData] = useState([]);
  const { recordStock } = useSelector(state => state.walletReducer);

  useEffect(() => {
    setData([...recordStock]);
    console.log(recordStock);
  }, [])
  

  return (
    <tbody>
      { sellStocks 
        ? data
          .map(({ id, cd_acao, vl_fechamento, qtdPurchased }) => (
          <tr key={ id }>
              <td>{ cd_acao }</td>
              <td>{ qtdPurchased }</td>
              <td>{ convertValue(Number(vl_fechamento) * Number(qtdPurchased)) }</td>
          </tr>
          ))
        : data
        .map(({ id, cd_acao, vl_fechamento }) => (
        <tr key={ id }>
            <td>{ cd_acao }</td>
            <td>1</td>
            <td>{ convertValue(vl_fechamento)}
            </td>
        </tr>
        ))
      }
    </tbody>
  );
};
export default BodyInfoStock;
