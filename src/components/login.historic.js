import React from 'react';
import { getUsersFromLocal } from '../services/localStorage';

const LoginLastAcess = () => {

  const [ lastAcess ] = getUsersFromLocal();

  return (
    <div>
        <h1>OU</h1>
        <h2>Faça login como { lastAcess }</h2>
    </div>
  );
}

export default LoginLastAcess;
