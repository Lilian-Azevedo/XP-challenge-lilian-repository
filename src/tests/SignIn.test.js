import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndStore from '../renderWithRouterAndStore';
import App from '../App';

let globalHistory = '';
const PASSWORD_FAKE = 'password';
const EMAIL_FAKE = 'newUser1@test.com';
const NAME_USER_FAKE = 'Fulano da Silva'

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
    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeTruthy();
  });
  test('3 - Teste se a página contém um input de senha', () => {
    const inputPassword = screen.getByTestId('senha-input');
    expect(inputPassword).toBeTruthy();
  });
  test('4 - Teste se a página contém input para campo de nome', () => {
    const inputEmail = screen.getByTestId('nome-input')
    expect(inputEmail).toBeTruthy();
  });
  test('5 - Teste se a página contém um botão de voltar que redireciona para a página inicial', () => {
    const buttonHome = screen.getByRole('button', { name: 'Voltar' });
    expect(buttonHome).toBeTruthy();
    userEvent.click(buttonHome);
    expect(globalHistory.location.pathname).toBe('/');
  });
  test('6 - Teste se a página contém um botão de Salvar que está desabilitado', () => {
    const buttonSave = screen.getByRole('button', { name: 'Salvar' });
    expect(buttonSave).toBeTruthy();
    userEvent.click(buttonSave);
    expect(globalHistory.location.pathname).toBe('/create');
  });
  test(`7 - Teste se, ao digitar as informações corretamente,
    o botão desabilita e redireciona para /wallet`, () => {
    const buttonSave = screen.getByRole('button', { name: 'Salvar' });
    const inputName = screen.getByTestId('nome-input');
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('senha-input');
    const radioButtonYes = screen.getByText(/sim/i);
    const inputValue = screen.getByRole('spinbutton');
    
    userEvent.type(inputName, NAME_USER_FAKE);
    userEvent.type(inputEmail, EMAIL_FAKE);
    userEvent.type(inputPassword, PASSWORD_FAKE);
    userEvent.click(radioButtonYes);
    userEvent.type(inputValue, 12000);
    userEvent.click(buttonSave);

    expect(globalHistory.location.pathname).toBe('/wallet');
  });// está falhando por conta do recordsStocks => verificar
});
