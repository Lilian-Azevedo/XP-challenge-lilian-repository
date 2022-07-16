import { SET_USER_INFOS } from './actionTypes';

export const saveUser = (user) => (
  {
    type: SET_USER_INFOS,
    payload: user,
  }
);

export const disabledButton = (isAble) => (
  {
    type: SET_USER_INFOS,
    payload: isAble,
  }
);