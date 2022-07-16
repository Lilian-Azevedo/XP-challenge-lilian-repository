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
    const userStored = getUserFromLocal();
    setUserToLocal([user, ...userStored]);
  }
};