import axios from 'axios';

export const TRANSACTIONS_API = 'http://localhost:3000/';

export const GET_TRANSACTIONS = '/transactions';

export const transactionsApi = axios.create({
  baseURL: TRANSACTIONS_API,
});

export const handleAxiosError = (error) => {
  const UNEXPECTED_ERROR = {
    message: "Ocorreu um erro inesperado",
  };
  if (error.request && !error.response)
    return {
      message: "Você está offline, verifique a sua internet e tente novamente",
      details: error.message,
    };
  else return UNEXPECTED_ERROR;
};
