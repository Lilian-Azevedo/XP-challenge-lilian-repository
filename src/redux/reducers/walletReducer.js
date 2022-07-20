import { SAVE_RECORD_STOCK } from "../actions/actionTypes";

const INITIAL_STATE = {
  recordStock: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_RECORD_STOCK:
      return { ...state, recordStock: [action.payload]};
    default:
      return state;
  }
}

export default walletReducer;