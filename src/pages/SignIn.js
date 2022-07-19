import React from 'react';

const SignIn = () => (
  <div className="details-page">
    <div>
      <h1>Criar usuário</h1>
    </div>

    <section>
      <input
        type="text"
        onChange={ handleInput }
        onKeyDown={ handleEnterClick }
        value={ inputEmail }
        name="inputEmail"
        placeholder="Email"
      />
      <input
        autoComplete="off"
        type="password"
        onChange={ handleInput }
        onKeyDown={ handleEnterClick }
        value={ inputPassword }
        name="inputPassword"
        placeholder="Senha"
      />
      </section>
  </div>
);

export default SignIn;