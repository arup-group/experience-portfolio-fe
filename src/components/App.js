import React from "react";
import "../App.css";
import { Router } from "@reach/router";
import HomePage from "./HomePage";
import PersonalCVPage from "./PersonalCVPage";
import { observer } from "mobx-react";
import Header from "./Header";

function App(props) {
  return (
    <div className="App">
      <Header currentUser={props.currentUser} />
      <Router>
        <HomePage path="/" currentUser={props.currentUser} />
        {props.currentUser.currentUser.length !== 0 && (
          <PersonalCVPage
            path="/:staff_id"
            currentUser={props.currentUser}
            userProjList={props.userProjList}
          />
        )}
      </Router>
    </div>
  );
}

export default observer(App);
