import { DISABLE_BUTTON, SAVE_RECORD_STOCK, SET_USER_INFOS } from './actionTypes';

export const saveUser = (user) => (
  {
    type: SET_USER_INFOS,
    payload: user,
  }
);

export const disabledButton = (isAble) => (
  {
    type: DISABLE_BUTTON,
    payload: isAble,
  }
);

export const recordStock = (stock) => (
  {
    type: SAVE_RECORD_STOCK,
    payload: stock,
  }
);