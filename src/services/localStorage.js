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
export const setNewUserToLocal = (newUser) => localStorage
  .setItem('users', JSON.stringify(newUser));

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
    setNewUserToLocal([...usersStored, initializeInfos]);
    addAcessUserToLocal(initializeInfos);
  }
};