import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { GlobalStyle } from "./global/global";
import Login from "./pages/Login/index";
import Dashboard from "./pages/dashboard/index";
import CreateJourney from "./pages/Create/index";
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/create" exact>
            <CreateJourney />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
