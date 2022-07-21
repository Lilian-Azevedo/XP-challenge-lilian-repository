import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndStore from '../renderWithRouterAndStore';
import App from '../App';

describe('Teste a página de Home', () => {
  test('1 - Teste se a página contém um title', () => {
    renderWithRouterAndStore(<App />);
    const homeTitle = screen.getByRole('heading', { name: 'XP Actioners', level: 1 });
    expect(homeTitle).toBeTruthy();
  });
  test('2 - Teste se a página contém uma imagem em forma de input', () => {
    renderWithRouterAndStore(<App />);
    const imgHomePage = screen.getByRole('button', { name: 'home Page' });
    expect(imgHomePage).toBeTruthy();
  });
  test('3 - Teste se a página contém um botão de login que redireciona para a página de login', () => {
    const { history } = renderWithRouterAndStore(<App />);
    const buttonLogin = screen.getByRole('button', { name: 'Faça Login' });
    expect(buttonLogin).toBeTruthy();

    userEvent.click(buttonLogin);
    expect(history.location.pathname).toBe('/login');
  });
});
