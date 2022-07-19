import { getUsersFromLocal } from "./localStorage";

export const verifyExistence = (userEmail) => {
  if (!JSON.parse(localStorage.getItem('users'))) {
    localStorage.setItem('users', JSON
      .stringify([]));
  }
  const usersStored = getUsersFromLocal();
  const findUser = usersStored.find(({ email }) => email === userEmail);
  return findUser;
};