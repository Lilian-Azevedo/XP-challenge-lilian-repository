import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndStore from '../renderWithRouterAndStore';
import App from '../App';

let globalHistory = '';

beforeEach(() => {
    const { history } = renderWithRouterAndStore(<App />);
    history.push('/login');
    globalHistory = history;
});
afterEach(() => localStorage.clear());
  

describe('Teste a página de Login', () => {
  test('1 - Teste se a página contém um title', () => {
    const loginTitle = screen.getByRole('heading', { name: 'Acesse sua conta', level: 1 });
    expect(loginTitle).toBeTruthy();
  });
  test('2 - Teste se a página contém input para campo de email', () => {
    const inputEmail = screen.getByRole('textbox', { name: 'Email' });
    expect(inputEmail).toBeTruthy();
  });
  test('3 - Teste se a página contém um input de senha', () => {
    const inputPassword = screen.getByTestId('senha-input');
    expect(inputPassword).toBeTruthy();
  });
//   test('3 - Teste se a página contém um botão de login que redireciona para a página de login', () => {
//     const { history } = renderWithRouterAndStore(<App />);
//     const buttonLogin = screen.getByRole('button', { name: 'Faça Login' });
//     expect(buttonLogin).toBeTruthy();

//     userEvent.click(buttonLogin);
//     expect(history.location.pathname).toBe('/login');
//   });
//   test('4 - Teste se a página contém um botão de criar user que redireciona para a página /create', () => {
//     const { history } = renderWithRouterAndStore(<App />);
//     const buttonCreate = screen.getByRole('button', { name: 'Crie uma conta' });
//     expect(buttonCreate).toBeTruthy();

//     userEvent.click(buttonCreate);
//     expect(history.location.pathname).toBe('/create');
//   });
});
