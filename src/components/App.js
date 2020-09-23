import React from "react";
import "../App.css";
import { Router } from "@reach/router";
import HomePage from "./HomePage";
import PersonalCVPage from "./PersonalCVPage";
import Header from "./Header";

// mobx and mobx models import
import { observer } from "mobx-react";
import {
  FullDescriptiveProjects,
  FullDescriptionProject,
} from "../models/Projects";
import { StaffKeywords } from "../models/Keywords";

const fullDescProjList = FullDescriptiveProjects.create({});
const fullDescriptionProject = FullDescriptionProject.create({});
const staffKeywordList = StaffKeywords.create({});

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
            staffKeywordList={staffKeywordList}
          />
        )}
      </Router>
    </div>
  );
}

export default observer(App);
