import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

const composeEnhancers = composeWithDevTools({});
const middlewares = applyMiddleware(thunk);
const middlewaresWithDevTools = composeEnhancers(middlewares);

const store = createStore(
  reducers,
  middlewaresWithDevTools,
);


export default store;
