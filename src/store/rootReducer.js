import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import transactionsReducer from './reducers';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    transactions: transactionsReducer
  });

export default createRootReducer;
