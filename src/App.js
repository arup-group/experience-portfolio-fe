import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import HomePage from "./components/HomePage";
import PersonalCVPage from "./components/PersonalCVPage";
import Login from "./components/Login";

class App extends Component {
  state = {
    staffID: "056876",
  };

  render() {
    return (
      <div className="App">
        {" "}
        <Login />
        <Router>
          <HomePage path="/" />
          {/* <PersonalCVPage path="/" staffID={this.state.staffID} />{" "} */}
        </Router>{" "}
      </div>
    );
  }
}

export default App;
