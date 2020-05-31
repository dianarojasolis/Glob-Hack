import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CreateAccount from "./Components/CreateAccount.jsx";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import LeafMap from "./Components/LeafMap"
<<<<<<< HEAD
import WhatDoYouNeed from "./Components/WhatDoYouNeed";
import MedicalRecord from "./Components/MedicalRecord";
import Programming from "./Components/Programming";
=======

import WhatDoYouNeed from "./Components/WhatDoYouNeed";
import MedicalRecord from "./Components/MedicalRecord";
import Programming from "./Components/Programming";

>>>>>>> 6acd3b405032365fd083bca817de8cc3b7fdcb4f

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
<<<<<<< HEAD
=======


>>>>>>> 6acd3b405032365fd083bca817de8cc3b7fdcb4f
          <Route path="/need">
            <WhatDoYouNeed />
          </Route>
          <Route path="/MedicalRecord">
            <MedicalRecord />
          </Route>
          <Route path="/Programming">
            <Programming />
          </Route>
<<<<<<< HEAD
=======

>>>>>>> 6acd3b405032365fd083bca817de8cc3b7fdcb4f
        </Switch>
      </Router>
      
      </div>
   
  );
}

export default App;
