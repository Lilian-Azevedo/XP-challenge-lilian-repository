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
const PASSWORD_FAKE = 'password';
const EMAIL_FAKE = 'newUser1@test.com';
const NAME_USER_FAKE = 'Fulano da Silva'

beforeEach(() => {
    const { history } = renderWithRouterAndStore(<App />);
    history.push('/wallet');
    globalHistory = history;
    localStorage.setItem('users', JSON.stringify(mockUsersLocalStorage));
    localStorage.setItem('userAcesses', JSON.stringify(mockAcessLocalSt));
});
afterEach(() => localStorage.clear());
  

describe('Teste a página SignIn', () => {
  test('1 - Teste se a página contém um header onde aparece o nome da pessoa', () => {
    const headerArea = screen.getByTestId('user-name');
    expect(headerArea).toBeTruthy();
  });
  test('2 - Teste se a página contém uma imagem de user', () => {
    renderWithRouterAndStore(<App />);
    const imgUser = screen.getByRole('button', { name: /profile/i });
    expect(imgUser).toBeTruthy();
  });
});
