import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndStore from '../renderWithRouterAndStore';
import App from '../App';

const mockUsersLocalStorage = [{
    id:527307854426,
    name:'Lilian',
    email: 'lili@test.com',
    createdAt: '2022-07-21T03:35:54.648Z',
    accountBalance: 10000,
    recordsStocks:[],
    financialTransactions:[{id: 1302846715987, donedAt: '2022-07-21T03:35:54.648Z', value:10000 }]
}];

const mockAcessLocalSt = { id:527307854426,
    name: 'Lilian',
    email:'lili@test.com',
    createdAt:'2022-07-21T03:35:54.648Z',
    accountBalance: 10000,
    recordsStocks: [],
    lastAcess: '2022-07-22T13:05:51.213Z'}

let globalHistory = '';

beforeEach(() => {
    const { history } = renderWithRouterAndStore(<App />);
    history.push('/buy/3039682');
    globalHistory = history;
    localStorage.setItem('users', JSON.stringify(mockUsersLocalStorage));
    localStorage.setItem('userAcesses', JSON.stringify(mockAcessLocalSt));
});
afterEach(() => localStorage.clear());
  

describe('Teste a página BuySale', () => {
  test('1 - Teste se a página contém um header onde aparece o nome da pessoa', () => {
    const headerArea = screen.getByTestId('user-name');
    expect(headerArea).toBeTruthy();
  });
  test('2 - Teste se a página contém uma imagem de user', () => {
    renderWithRouterAndStore(<App />);
    const imgUser = screen.getByRole('button', { name: /profile/i });
    expect(imgUser).toBeTruthy();
  });

  test('3 - Teste se a página contém o title Comprar ação', () => {
    const buyStockTitle = screen.getByRole('heading', { name: /comprar ação/i, level: 1 });
    expect(buyStockTitle).toBeTruthy();
  });

  test('4 - Teste se a página contém uma tabela com o head: ação, quantidade e valor unitário', () => {
    renderWithRouterAndStore(<App />);
    const headTableStock = screen.getByRole('columnheader', { name: /ação/i });
    const headTableQtt = screen.getByRole('columnheader', { name: /quantidade/i });
    const headTableValue = screen.getByRole('columnheader', { name: /valor/i });
    expect(headTableStock && headTableQtt && headTableValue).toBeTruthy();
  });
  test('5 - Teste se a página contém uma ação disponível para compra', () => {
    renderWithRouterAndStore(<App />);

    const stockName = screen.getByRole('cell', { name: /vale3/i });
    const stockQTT = screen.getByRole('cell', { name: /1/i });
    const stockUnitValue = screen.getByRole('cell', { name: /r\$ 54,33/i });
    expect(stockName && stockQTT && stockUnitValue).toBeTruthy();
  });
  test('6 - Teste se a página contém input para adicionar quantidade de ações', () => {
    const inputValue= screen.getByRole('textbox');
    expect(inputValue).toBeTruthy();
  });
  test.only(`7 - Teste se a página contém um campo que mostra o total da compra e ao digitar um valor, ele é alterado também`, () => {
    const inputValue= screen.getByRole('textbox');
    userEvent.type(inputValue, 200);

    const totalValueBought= screen.getByTestId('totalValue');
    expect(totalValueBought).toBeTruthy();
  });
});
