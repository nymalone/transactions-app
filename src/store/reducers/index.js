import {
  TRANSACTIONS_FETCHED,
  TRANSACTIONS_LOADING,
  TRANSACTIONS_ERROR,
  CREATE_TRANSACTION_LOADING,
  CREATE_TRANSACTION_ERROR,
} from "../consts";

const INITIAL_STATE = {
  transactions: [],
  loading: false,
  error: undefined,
  createTransactionLoading: false,
  createTransactionError: undefined,
};

const transactionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRANSACTIONS_FETCHED:
      return {
        ...state,
        transactions: action.payload,
      };
    case TRANSACTIONS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case TRANSACTIONS_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case CREATE_TRANSACTION_LOADING:
      return {
        ...state,
        createTransactionLoading: action.payload,
      };
    case CREATE_TRANSACTION_ERROR:
      return {
        ...state,
        createTransactionError: action.error,
      };
    default:
      return state;
  }
};

export default transactionsReducer;
