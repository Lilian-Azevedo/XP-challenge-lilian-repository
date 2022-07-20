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

// export const getAccountInfoFromLocal = () => JSON
//   .parse(localStorage.getItem('usersAccountInfo'));
// export const setAccountInfoToLocal = (financialTransaction) => localStorage
//   .setItem('usersAccountInfo', JSON.stringify(financialTransaction));

// export const addAccountInfoToLocal = (type, usersAccountInfo) => {
//   if (!JSON.parse(localStorage.getItem('usersAccountInfo'))) {
//     localStorage.setItem('usersAccountInfo', JSON
//       .stringify({ }));
//   }
//   if (usersAccountInfo) {
//     const { id, ingredients } = usersAccountInfo;
//     const AccountInfoStored = getAccountInfoFromLocal();
//     const keyDataStored = AccountInfoStored[type];
//     const newObjecttype = { ...keyDataStored, [id]: ingredients };
//     setAccountInfoToLocal({ ...AccountInfoStored, [type]: newObjecttype });
//   }
// };

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
      accountBalance: newUser.inputValueInitial,
      recordsStocks:[], financialTransactions: [] };
    setUserToLocal([...usersStored, initializeInfos]);
    addAcessUserToLocal(initializeInfos);
  }
};

const removeStockFromLocal = (stock, user) => {
  const usersStored= getUsersFromLocal();
  const removeUser = usersStored.filter(userStore => userStore.id !== Number(user.id));
  const newUpdate = user.recordsStocks.filter(({ id }) => id !== Number(stock.id));
  console.log(newUpdate);
  const userUpdated = { ...user, recordsStocks: newUpdate };
  setUserToLocal([...removeUser, userUpdated ]);
  addAcessUserToLocal(userUpdated);
  return;
  // return { ...user, recordsStocks: newUpdate }
};

const updateStockToLocal = (stock, user) => {
  const newUpdate = user.recordsStocks.filter(({ id }) => id !== Number(stock.id));
  return { ...user, recordsStocks: [...newUpdate, stock] }
};

export const setAccountInfoToLocal = (financialTransaction) => localStorage
  .setItem('usersAccountInfo', JSON.stringify(financialTransaction));

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
  if (value) {
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
