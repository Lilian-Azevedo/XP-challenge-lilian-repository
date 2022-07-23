import { generateId } from "./functions";

export const getLastUserAcessFromLocal = () => JSON
  .parse(localStorage.getItem('userAcesses'));
export const setUserAcessToLocal = (newUser) => localStorage
  .setItem('userAcesses', JSON.stringify(newUser));

export const addAcessUserToLocal = (user) => {
  if (!JSON.parse(localStorage.getItem('userAcesses'))) {
    localStorage.setItem('userAcesses', JSON
      .stringify({ name: ''}));
  }
  if (user) {
    setUserAcessToLocal(user);
  }
};

// Armazenamento de usuários cadastrados
export const getUsersFromLocal = () => JSON
  .parse(localStorage.getItem('users'));

export const setUserToLocal = (newList) => localStorage
  .setItem('users', JSON.stringify(newList));

export const addNewUserToLocal = (newUser) => {
  if (!JSON.parse(localStorage.getItem('users'))) {
    localStorage.setItem('users', JSON
      .stringify([]));
  }
  if (newUser) {
    const usersStored = getUsersFromLocal();
    const initializeInfos = { 
      id: newUser.id,
      name: newUser.inputName,
      email: newUser.inputEmail,
      createdAt: new Date(),
      accountBalance: 0,
      recordsStocks:[], financialTransactions: [] };
    setUserToLocal([...usersStored, initializeInfos]);
    addAcessUserToLocal(initializeInfos);
  }
};

// remoção de ação
const removeStockFromLocal = (stock, user) => {
  const usersStored= getUsersFromLocal();
  const removeUser = usersStored.filter(userStore => userStore.id !== Number(user.id));
  const newUpdate = user.recordsStocks.filter(({ id }) => id !== Number(stock.id));
  console.log(newUpdate);
  const userUpdated = { ...user, recordsStocks: newUpdate };
  setUserToLocal([...removeUser, userUpdated ]);
  addAcessUserToLocal(userUpdated);
  return;
};

// atualização de ações
const updateStockToLocal = (newUpdate, user) => {
  const stocksRec = user.recordsStocks.filter(({ id }) => id !== Number(newUpdate.id));
  return { ...user, recordsStocks: [...stocksRec, newUpdate] }
};

export const updateDataUserLocalSt = (newUpdate, userID) => {
  const usersStored = getUsersFromLocal();
  const userFind = usersStored.find(({ id }) => id === Number(userID));
  if (newUpdate) {
    console.log(newUpdate.qtdPurchased);
    if (!newUpdate.qtdPurchased || newUpdate.qtdPurchased === 'null') {
      return removeStockFromLocal(newUpdate, userFind);
    }
    

    let userUpdated = {};
    const findRecord = userFind.recordsStocks.find(({ id }) => id === Number(newUpdate.id));

    if (!findRecord) {
      userUpdated = { ...userFind, recordsStocks: [...userFind.recordsStocks, newUpdate] };
    } else {
      userUpdated = updateStockToLocal(newUpdate, userFind);
    }
    const removeUser = usersStored.filter(userStore => userStore.id !== Number(userID));
    setUserToLocal([...removeUser, userUpdated ]);
    addAcessUserToLocal(userUpdated);
  }
};

export const updateAccountLocalSt = (type, value, user) => {
  if (type) {
    const usersStored = getUsersFromLocal();
    const userFind = usersStored.find(({ id }) => id === Number(user.id));
    const userUpdatedBalance = (type === 'compra'
      ? (Number(userFind.accountBalance) - Number(value))
      : (Number(userFind.accountBalance) + Number(value)));
    const userUpdated = { ...userFind, accountBalance: userUpdatedBalance };
    const removeUser = usersStored.filter(userStore => userStore.id !== Number(user.id));
    setUserToLocal([...removeUser, userUpdated ]);
    addAcessUserToLocal(userUpdated);
  }
};

export const addDepositWithdtoLocal = (newUpdate, userId) => {
  if (newUpdate) {
    const usersStored = getUsersFromLocal();
    const user = usersStored.find(({ id }) => id === Number(userId));

    const transation = { 
      id: generateId(),
      type: newUpdate.type,
      donedAt: new Date(),
      value: newUpdate.value };
    const newAccountBalance = (newUpdate.type === 'Depósito') 
      ? (Number(user.accountBalance) + Number(newUpdate.value))
      : (Number(user.accountBalance) - Number(newUpdate.value));

    const userUpdated = { ...user,
      financialTransactions: [ transation,...user.financialTransactions],
      accountBalance: newAccountBalance,
    };
    const removeUser = usersStored.filter(userStore => userStore.id !== Number(userId));
    setUserToLocal([...removeUser, userUpdated ]);
    addAcessUserToLocal(userUpdated);
  }
};
