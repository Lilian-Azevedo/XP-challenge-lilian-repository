import React from 'react';
import InputLogin from '../components/login.input';
import LoginLastAcess from '../components/login.record';
import LoginButtons from '../components/login.buttons';

const LoginRef = () => {
  return (
    <div>
      <div>
          <h1>Acesse sua conta</h1>
      </div>
      <InputLogin />
      <LoginLastAcess />
      <LoginButtons />
    </div>);
}

export default LoginRef;
