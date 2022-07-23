import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndStore from '../renderWithRouterAndStore';
import App from '../App';

const newRecord = {
    id: 3039512, tp_reg:1,dt_pregao:'20200102',cd_bdi:'02',cd_acao:'GUAR3',tp_merc:10,
    nm_empresa_rdz:'GUARARAPES', moeda_ref:'R$',
    vl_abertura:23.9,vl_maximo:24.64,vl_minimo:23.85,vl_medio:24.43,
    vl_fechamento:24.48,vl_mlh_oft_compra:24.46,vl_mlh_oft_venda:24.48,
    vl_ttl_neg:4707,qt_tit_neg:781900,vl_volume:19107561,vl_exec_opc:0,
    in_opc:0,dt_vnct_opc:99991231,ft_cotacao:1,vl_exec_moeda_corrente:0,
    cd_isin:'BRGUARACNOR4',cd_acao_rdz:'GUAR',created_at:'2021-10-22T17:19:02.000000Z',
    updated_at:'2021-10-22T17:19:02.000000Z',qtdPurchased:12
};

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
    history.push('/wallet');
    globalHistory = history;
    localStorage.setItem('users', JSON.stringify(mockUsersLocalStorage));
    localStorage.setItem('userAcesses', JSON.stringify(mockAcessLocalSt));
});
afterEach(() => localStorage.clear());
  

describe('Teste a página Wallet', () => {
  test('1 - Teste se a página contém um header onde aparece o nome da pessoa', () => {
    const headerArea = screen.getByTestId('user-name');
    expect(headerArea).toBeTruthy();
  });
  test('2 - Teste se a página contém uma imagem de user', () => {
    renderWithRouterAndStore(<App />);
    const imgUser = screen.getByRole('button', { name: /profile/i });
    expect(imgUser).toBeTruthy();
  });

  test('3 - Teste se a página contém dois campos: minhas ações e disponível', () => {
    const myStocksTitle = screen.getByRole('heading', { name: /minhas ações/i, level: 1 });
    const availabStocksTitle = screen.getByRole('heading', { name: /ações disponíveis/i, level: 1 });
    expect(myStocksTitle && availabStocksTitle).toBeTruthy();
  });

  test('4 - Teste se a página contém texto com a frase de que está vazia', () => {
    const textEmptyWallet = screen.getByRole('heading', { name: /Parece que sua carteira de ações está vazia/i,  level: 3 });
    expect(textEmptyWallet).toBeTruthy();
  });
  test('5 - Teste se a página contém uma lista com ações disponíveis para compra', () => {
    renderWithRouterAndStore(<App />);

    const stockFind1 = screen.getByRole('row', { name: /vale3 1 54\.33 comprar/i });
    const stockFind2 = screen.getByRole('row', { name: /radl3 1 114\.83 comprar/i });
    const stockFind3 = screen.getByRole('row', { name: /pepb34 1 547\.15 comprar/i });
    expect(stockFind1 && stockFind2 && stockFind3).toBeTruthy();
  });
});
