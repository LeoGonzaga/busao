import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import { GlobalStyle } from "./global/global";
import SelectPermission from "./pages/SelectPermission/index";
import Dashboard from "./pages/dashboard/index";
import CreateJourney from "./pages/Create/index";
import Login from "./pages/Login/index";
function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      let token = await localStorage.getItem("token");
      if (token) {
        userHasAuthenticated(true);
      } else {
        console.log("Sem permissão");
        userHasAuthenticated(false);
      }
    } catch (e) {
      alert(e);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact>
            <SelectPermission />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard auth={isAuthenticated} />
          </Route>
          {isAuthenticated ? (
            <Route path="/create">
              <CreateJourney />
            </Route>
          ) : (
            <Redirect to="/" />
          )}
        </Switch>
      </Router>
    </>
  );
}

export default App;
