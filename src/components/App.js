import React from "react";
import "../App.css";
import { Router } from "@reach/router";
import HomePage from "./HomePage";
import PersonalCVPage from "./PersonalCVPage";
import { observer } from "mobx-react";
import {
  FullDescriptiveProjects,
  FullDescriptionProject,
} from "../models/Projects";
import Header from "./Header";

const fullDescProjList = FullDescriptiveProjects.create({});
const fullDescriptionProject = FullDescriptionProject.create({});

function App(props) {
  return (
    <div className="App">
      <Header
        currentUser={props.currentUser}
        fullDescProjList={fullDescProjList}
      />
      <Router>
        <HomePage path="/" currentUser={props.currentUser} />
        {props.currentUser.currentUser.length !== 0 && (
          <PersonalCVPage
            path="/:staff_id"
            currentUser={props.currentUser}
            userProjList={props.userProjList}
            fullDescProjList={fullDescProjList}
            fullDescriptionProject={fullDescriptionProject}
          />
        )}
      </Router>
    </div>
  );
}

export default observer(App);
