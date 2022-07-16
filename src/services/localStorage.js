export const getUsersFromLocal = () => JSON
  .parse(localStorage.getItem('userActioners'));
export const setUserToLocal = (newUser) => localStorage
  .setItem('userActioners', JSON.stringify(newUser));
