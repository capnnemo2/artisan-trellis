import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Landing from "./Landing/Landing";
import Site1 from "./Site1/Site1.js";
import Site2 from "./Site2/Site2";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/site1" component={Site1} />
        <Route path="/site2" component={Site2} />
      </Switch>
    </div>
  );
}

export default App;
