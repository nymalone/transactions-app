import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import store from "./store/index";

import Home from "./components/pages/Home";
import NewTransaction from "./components/pages/NewTransaction";

import GlobalStyles from "./style/createGlobalStyle";

function App() {
  return (
    <Provider store={store}>
        <Router>
          <GlobalStyles />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/new-transaction" component={NewTransaction} />
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
