//import { push } from 'connected-react-router'

import {
  transactionsApi,
  handleAxiosError,
  GET_TRANSACTIONS,
} from "../../services/api";

import {
  TRANSACTIONS_FETCHED,
  TRANSACTIONS_LOADING,
  TRANSACTIONS_ERROR,
  CREATE_TRANSACTION_LOADING,
  CREATE_TRANSACTION_ERROR,
} from "../consts";

// GET
export const setTransactionsList = (transactions = []) => ({
  type: TRANSACTIONS_FETCHED,
  payload: transactions,
});

export const setTransactionsListLoading = (state = false) => ({
  type: TRANSACTIONS_LOADING,
  payload: state,
});

export const setTransactionsListError = (error) => ({
  type: TRANSACTIONS_ERROR,
  error,
});

export const initTransactions = () => (dispatch, getState) => {
  if (getState().transactions.length < 1) {
    const handleFetch = () => {
      dispatch(fetchTransactionsList());
    };
    setInterval(handleFetch, 10000);
    handleFetch();
  }
};

export const fetchTransactionsList = () => async (dispatch) => {
  dispatch(setTransactionsListLoading(true));
  try {
    const { data } = await transactionsApi({
      method: "GET",
      url: GET_TRANSACTIONS,
    });
    dispatch(setTransactionsList(data));
  } catch (axiosError) {
    const error = handleAxiosError(axiosError);
    dispatch(setTransactionsListError(error));
  } finally {
    dispatch(setTransactionsListLoading(false));
  }
};

// POST
export const setTransactionLoading = (state = false) => ({
  type: CREATE_TRANSACTION_LOADING,
  payload: state,
});

export const setTransactionError = (error) => ({
  type: CREATE_TRANSACTION_ERROR,
  error,
});

export const createTransaction = (value) => async (dispatch) => {
  dispatch(setTransactionLoading(true));
  try {
    const response = await transactionsApi({
      url: GET_TRANSACTIONS,
      method: "POST",
      data: value
    });
    dispatch(fetchTransactionsList(response));
  } catch (axiosError) {
    const error = handleAxiosError(axiosError);
    dispatch(setTransactionError(error));
  } finally {
    dispatch(setTransactionLoading(false));
  }
};
