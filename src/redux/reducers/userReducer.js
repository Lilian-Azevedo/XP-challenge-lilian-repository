import { DISABLE_BUTTON, SET_USER_INFOS } from "../actions/actionTypes";

const INITIAL_STATE = {
  user: { email: '' },
  buttonLogin: true,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_INFOS:
      return { ...state, user: { email: action.payload } };
    case DISABLE_BUTTON:
      return { ...state, buttonLogin: action.payload };
    default:
      return state;
  }
}

export default userReducer;