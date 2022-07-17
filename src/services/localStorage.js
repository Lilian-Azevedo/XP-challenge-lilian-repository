export const getUsersFromLocal = () => JSON
  .parse(localStorage.getItem('userActioners'));
export const setUserToLocal = (newUser) => localStorage
  .setItem('userActioners', JSON.stringify(newUser));

export const addAcessUserToLocal = (user) => {
  if (!JSON.parse(localStorage.getItem('userActioners'))) {
    localStorage.setItem('userActioners', JSON
      .stringify([]));
  }
  if (user) {
    const userStored = getUsersFromLocal();
    setUserToLocal([user, ...userStored]);
  }
};

export const getAccountInfoFromLocal = () => JSON
  .parse(localStorage.getItem('usersAccountInfo'));
export const setAccountInfoToLocal = (financialTransaction) => localStorage
  .setItem('usersAccountInfo', JSON.stringify(financialTransaction));

export const addAccountInfoToLocal = (type, usersAccountInfo) => {
  if (!JSON.parse(localStorage.getItem('usersAccountInfo'))) {
    localStorage.setItem('usersAccountInfo', JSON
      .stringify({ }));
  }
  if (usersAccountInfo) {
    const { id, ingredients } = usersAccountInfo;
    const AccountInfoStored = getAccountInfoFromLocal();
    const keyDataStored = AccountInfoStored[key];
    const newObjectKey = { ...keyDataStored, [id]: ingredients };
    setAccountInfoToLocal({ ...AccountInfoStored, [key]: newObjectKey });
  }
};