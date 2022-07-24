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
    history.push('/account');
    localStorage.setItem('users', JSON.stringify(mockUsersLocalStorage));
    localStorage.setItem('userAcesses', JSON.stringify(mockAcessLocalSt));
    globalHistory = history;
});
afterEach(() => localStorage.clear());
  

describe('Teste a página de depósito e retirada', () => {
  test('1 - Teste se a página contém um header onde aparece o nome da pessoa', () => {
    const headerArea = screen.getByTestId('user-name');
    expect(headerArea).toBeTruthy();
  });
  test(`2 - Teste se a página contém um campo que mostra o saldo disponível na conta`, () => {
    const accountBalance=  screen.getByRole('heading', { name: /saldo disponível:/i });
    
    const valueAccount= screen.getByRole('heading', { name: /r\$ 10\.000,00/i })
    expect(accountBalance && valueAccount).toBeTruthy();
  });
});
