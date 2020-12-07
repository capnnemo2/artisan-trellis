import React from "react";
import { Route, Switch } from "react-router-dom";

import Landing from "./Landing/Landing";
import Site1 from "./Site1/Site1.js";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/site1" component={Site1} />
      </Switch>
    </div>
  );
}

export default App;
