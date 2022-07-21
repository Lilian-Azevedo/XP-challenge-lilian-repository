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
    history.push('/create');
    globalHistory = history;
});
afterEach(() => localStorage.clear());
  

describe('Teste a página SignIn', () => {
  test('1 - Teste se a página contém um title', () => {
    const signInTitle = screen.getByRole('heading', { name: 'Crie a sua conta!', level: 1 });
    expect(signInTitle).toBeTruthy();
  });
  test('2 - Teste se a página contém input para campo de email', () => {
    const inputEmail = screen.getByRole('textbox', { name: 'Email' });
    expect(inputEmail).toBeTruthy();
  });
  test('3 - Teste se a página contém um input de senha', () => {
    const inputPassword = screen.getByTestId('senha-input');
    expect(inputPassword).toBeTruthy();
  });
  test('2 - Teste se a página contém input para campo de nome', () => {
    const inputEmail = screen.getByRole('textbox', { name: 'Nome' });
    expect(inputEmail).toBeTruthy();
  });
});
