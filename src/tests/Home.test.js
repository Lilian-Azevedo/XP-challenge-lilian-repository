import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouterAndStore from '../renderWithRouterAndStore';
// import App from '../App';
import Home from '../pages/Home';
import App from '../App';

// beforeEach(() => {
//     const { history } = renderWithRouterAndStore(<App />);
//     history.push('/');
//     // globalHistory = history;
// });

describe('Teste a página de Home', () => {
  test('Teste se a página contém um title', () => {
    renderWithRouterAndStore(<App />);
    const homeTitle = screen.getByRole('heading', { name: 'XP Actioners', level: 1 });
    expect(homeTitle).toBeTruthy();
  });
});
