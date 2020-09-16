import React from "react";
import "../App.css";
import { Router } from "@reach/router";
import HomePage from "./HomePage";
import PersonalCVPage from "./PersonalCVPage";

// generate components
// import { User } from "./models/Users";
// const currentUser = User.create({});

function App(props) {
  return (
    <div className="App">
      <Router>
        <HomePage path="/" currentUser={props.currentUser} />
        <PersonalCVPage
          path="/:staff_id"
          currentUser={props.currentUser}
          userProjectList={props.userProjectList}
        />
      </Router>
    </div>
  );
}

export default App;
