import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import mockListStocks from '../mocks/mockListStocks';

const listHead = ['Ação', 'Quantidade', 'Valor', 'Negociar'];

const AvailableStocks = () => {
  const history = useHistory();
  const [data, setData] = useState([]);

  const handleClick = ({ target: { id } }) => {
    history.push(`/buy/${id}`);
  }

  useEffect(() => {
    const START_LINE = -1;
    const FINAL_LINE = 1;
    const getDataAPI = async () => {
      // const response = await fetch(endpoint);
      // const results = await response.json();
      const results = mockListStocks; // use mock
      const sortData = results
        .sort((investimentA, investiment) => {
          if (investimentA.cd_acao < investiment.cd_acao) return FINAL_LINE;
          return (investimentA.cd_acao > investiment.cd_acao) ? START_LINE : 0;
        });
      setData(sortData);
    };
    getDataAPI();
  }, []);

  return (
    <div>
      <h1>Available</h1>
      <div>
        <table>
          <thead>
          <tr>
            {listHead.map(item => (<th key={ item }>{ item }</th>))}
          </tr>
          </thead>
          <tbody>
          {data.map(({ id, cd_acao, vl_fechamento }, index) => (
              <tr key={ index }>
                  <td>{ cd_acao }</td>
                  <td>1</td>
                  <td>{ vl_fechamento }</td>
                  <td>
                  <button
                    id={ id }
                    type="button"
                    onClick={ handleClick }
                  >
                      C
                  </button>
                  {/* <button
                      type="button"
                      // onClick={ }
                  >
                      V
                  </button> */}
                  </td>
              </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AvailableStocks;