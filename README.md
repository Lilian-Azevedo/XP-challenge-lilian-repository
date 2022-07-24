# Boas vindas ao repositório do projeto ActionXPerts, espero que tenha uma boa visita!!

# Contexto

Essa aplicação foi desenvolvida como um desafio técnico, envolvendo a parte de Front-end em que uma pessoa usuária pode criar uma conta para compra e venda de ações, a partir de uma lista de ações disponíveis. Dentro da aplicação também pode-se adicionar uma valor para depósito ou retirada, além do histórico dessas transações.

# Guia de Páginas

Essa aplicação contém 9 rotas que levam às páginas:
    - [1 - Página Inicial - Home : rota **/**]
    - [2 - Página de Criação de conta - Create : rota **/create**]
    - [3 - Página de Login - Login : rota **/login**]
    - [4 - Página da Carteira de ações - Wallet : rota **/wallet**]
    - [5 - Página de Compra de uma ação - BuySaleStock : rota **/buy/:id**]
    - [6 - Página de Venda de uma ação - BuySaleStock : rota **/sell/:id**]
    - [7 - Página de Depósito/Retirada - WithdrawDeposit : rota **/account**]
    - [8 - Página de Histórico/Extrato - Historic : rota **/historic**]
    - [9 - Página de Não Encontrado - NotFound : rota **-**]
    
## Técnologias usadas

Nesse projeto, foi utilizado:

* **React** com componentes funcionais.
* _Redux_ para gerenciar de estado global.
* _React Hooks como: useState_, _useEffect_, _useHistory, entre outros ;
* _React Hooks para comunicação com estado global: _useDispatch_ e _useSelector_;
*  _React Hook_ customizados: _usePath.
*  _CSS3_ e _React Testing Library_.

## Instalando Dependências

> Frontend
```bash
git clone ....
cd src/
npm install
``` 
## Executando aplicação

* Para rodar o projeto:

  ```
    cd src/ && npm start
  ```
* Para rodar os testes:

  ```
    cd src/ && npm run test
  ```

## Observações

* O aplicativo foi desenvolvido com mobile first, por esse motivo algumas configurações de css responsivo podem estar falhando. Agradeço a compreensão.