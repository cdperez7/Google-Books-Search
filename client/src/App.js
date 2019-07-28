import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavTabs from "./components/NavTabs";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavTabs/>
        </div>
      </Router>
    );
  }
}

export default App;
