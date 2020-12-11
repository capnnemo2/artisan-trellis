import React from "react";
import { Switch, Route } from "react-router-dom";
import "./Window.css";
import Scene1 from "../components/Scene1/Scene1";
import Scene2 from "../components/Scene2/Scene2";

export default function Window({ getProductInfo }) {
  return (
    <div className="Window">
      <div className="content-window">
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Scene1 getProductInfo={getProductInfo} />}
          />
          <Route
            path="/scene2"
            component={() => <Scene2 getProductInfo={getProductInfo} />}
          />
        </Switch>
      </div>
    </div>
  );
}
