import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CreateAccount from "./Components/CreateAccount.jsx";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import LeafMap from "./Components/LeafMap"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <CreateAccount />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/map">
            <LeafMap />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
