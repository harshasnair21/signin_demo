import "./index.css";
import React from "react";
import Home from "./Home";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/Home" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
