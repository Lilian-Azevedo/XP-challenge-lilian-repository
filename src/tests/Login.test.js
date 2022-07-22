import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndStore from '../renderWithRouterAndStore';
import App from '../App';

let globalHistory = '';
const PASSWORD_FAKE = 'password';
const EMAIL_FAKE = 'newUser1@test.com';

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
  test('4 - Teste se a página contém um botão de voltar que redireciona para a página inicial', () => {
    const buttonHome = screen.getByRole('button', { name: 'Voltar' });
    expect(buttonHome).toBeTruthy();
    userEvent.click(buttonHome);
    expect(globalHistory.location.pathname).toBe('/');
  });
  test('5 - Teste se a página contém um botão de Entrar que está desabilitado', () => {
    const buttonEnter = screen.getByRole('button', { name: 'Entrar' });
    expect(buttonEnter).toBeTruthy();
    userEvent.click(buttonEnter);
    expect(globalHistory.location.pathname).toBe('/login');
  });
  test(`6 - Teste se, ao digitar as informações de user não criado,
    o botão desabilita e redireciona para /not-found`, () => {
    const buttonEnter = screen.getByRole('button', { name: 'Entrar' });
    const inputEmail = screen.getByRole('textbox', { name: 'Email' });
    const inputPassword = screen.getByTestId('senha-input');

    userEvent.type(inputEmail, EMAIL_FAKE);
    userEvent.type(inputPassword, PASSWORD_FAKE);
    userEvent.click(buttonEnter);

    expect(globalHistory.location.pathname).toBe('/not-found');
  });
  test(`7 - Teste se, ao digitar as informações de user criado,
  o botão desabilita e redireciona para /wallet`, () => {
  const buttonEnter = screen.getByRole('button', { name: 'Entrar' });
  const inputEmail = screen.getByRole('textbox', { name: 'Email' });
  const inputPassword = screen.getByTestId('senha-input');

  userEvent.type(inputEmail, EMAIL_FAKE);
  userEvent.type(inputPassword, PASSWORD_FAKE);
  userEvent.click(buttonEnter);

  expect(globalHistory.location.pathname).toBe('/wallet');
}); // falta colocar mock ls
});
