import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import HomePage from "./components/HomePage";
import PersonalCVPage from "./components/PersonalCVPage";

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path="/" />
        <PersonalCVPage path="/:staff_id" />
      </Router>
    </div>
  );
}

export default App;
