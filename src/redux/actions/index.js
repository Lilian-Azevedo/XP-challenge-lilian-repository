import { SET_USER_INFOS } from './actionTypes';

export const setUserInfos = (user) => (
  {
    type: SET_USER_INFOS,
    payload: user,
  }
);