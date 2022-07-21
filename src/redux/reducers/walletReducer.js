import { SAVE_ACCOUNT_BALANCE, SAVE_RECORD_STOCK } from "../actions/actionTypes";

const INITIAL_STATE = {
  recordStock: [],
  accountBalance: 0,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_RECORD_STOCK:
      return { ...state, recordStock: [action.payload]};
    case SAVE_ACCOUNT_BALANCE:
      return { ...state, accountBalance: action.payload};
    default:
      return state;
  }
}

export default walletReducer;