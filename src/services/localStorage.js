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
    console.log(newUser);
    const initializeInfos = { 
      id: newUser.id,
      name: newUser.inputName,
      email: newUser.inputEmail,
      createdAt: new Date(),
      accountBalance: newUser.inputValueInitial,
      recordsStocks:[], financialTransactions: [] };
    console.log(initializeInfos);
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
const updateStockToLocal = (stock, user) => {
  const newUpdate = user.recordsStocks.filter(({ id }) => id !== Number(stock.id));
  return { ...user, recordsStocks: [...newUpdate, stock] }
};

export const updateDataUserLocalSt = (type, newUpdate, user) => {
  if (newUpdate) {
    if (newUpdate.qtdPurchased === 0) {
      return removeStockFromLocal(newUpdate, user);
    }
    let userUpdated = {};
    const usersStored= getUsersFromLocal();
    const findRecord = user[type].find(({ id }) => id === Number(newUpdate.id));
    if (findRecord) {
      userUpdated = updateStockToLocal(newUpdate, user);
    } else {
      userUpdated = { ...user, [type]: [...user[type], newUpdate] };
    }
    const removeUser = usersStored.filter(userStore => userStore.id !== Number(user.id));
    setUserToLocal([...removeUser, userUpdated ]);
    addAcessUserToLocal(userUpdated);
  }
};

export const updateAccountLocalSt = (type, value, user) => {
  if (type) {
    const usersStored = getUsersFromLocal();
    const userFind = usersStored.find(({ id }) => id === Number(user.id));
    const userUpdatedBalance = ((type === 'compra' || type === 'Retirada')
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
    const userUpdated = { ...user, financialTransactions: [...user.financialTransactions, transation] };
    const removeUser = usersStored.filter(userStore => userStore.id !== Number(userId));
    setUserToLocal([...removeUser, userUpdated ]);
    addAcessUserToLocal(userUpdated);
  }
};
