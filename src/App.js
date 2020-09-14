import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import PersonalCVPage from "./components/PersonalCVPage";

function App() {
  return (
    <div className="App">
      <HomePage />
      <h1>Welcome to Your CV!</h1>
      <PersonalCVPage />
    </div>
  );
}

export default App;
