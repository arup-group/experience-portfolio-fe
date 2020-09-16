import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import HomePage from "./components/HomePage";
import PersonalCVPage from "./components/PersonalCVPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <HomePage path="/" />
          <PersonalCVPage path="/:staffID" />
        </Router>
      </div>
    );
  }
}

export default App;
