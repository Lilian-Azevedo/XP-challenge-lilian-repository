import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import usePath from '../hooks/usePath';
import { convertedValue } from '../services/functions';

const BodyInfoStock = () => {
  const { sellStocks } = usePath();
  const [data, setData] = useState([]);
  const { recordStock } = useSelector(state => state.walletReducer);

  useEffect(() => {
    setData([...recordStock]);
  }, [recordStock])
  

  return (
    <tbody>
      { sellStocks 
        ? data
          .map(({ id, cd_acao, vl_fechamento, qtdPurchased }) => (
          <tr key={ id } className='container-head-buy-sell'>
              <td>{ cd_acao }</td>
              <td>{ qtdPurchased }</td>
              <td>{ convertedValue((Number(vl_fechamento) * Number(qtdPurchased))) }</td>
          </tr>
          ))
        : data
        .map(({ id, cd_acao, vl_fechamento }) => (
        <tr className='container-head-buy-sell' key={ id }>
            <td>{ cd_acao }</td>
            <td>1</td>
            <td>{ convertedValue(vl_fechamento)}
            </td>
        </tr>
        ))
      }
    </tbody>
  );
};
export default BodyInfoStock;
