import React from "react";
import "../App.css";
import { Router } from "@reach/router";
import HomePage from "./HomePage";
import PersonalCVPage from "./PersonalCVPage";
import Header from "./Header";
import PortfolioPage from "./PortfolioPage";

// mobx and mobx models import
import { observer } from "mobx-react";
import {
  FullDescriptiveProjects,
  FullDescriptionProject,
} from "../models/Projects";
import { StaffKeywords, PortfolioKeywords } from "../models/Keywords";
import { Information } from "../models/Information";

const fullDescProjList = FullDescriptiveProjects.create({});
const fullDescriptionProject = FullDescriptionProject.create({});
const staffKeywordList = StaffKeywords.create({});
const portfolioKeywordList = PortfolioKeywords.create({});
const infoViews = Information.create({});
infoViews.getInfo();

function App(props) {
  return (
    <div className="App">
      <Header
        currentUser={props.currentUser}
        fullDescProjList={fullDescProjList}
        infoViews={infoViews}
      />
      <Router>
        <HomePage
          path="/"
          currentUser={props.currentUser}
          portfolioKeywordList={portfolioKeywordList}
        />
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
        {props.currentUser.currentUser.length !== 0 && (
          <PortfolioPage
            path="/portfolio"
            currentUser={props.currentUser}
            userProjList={props.userProjList}
            fullDescProjList={fullDescProjList}
            fullDescriptionProject={fullDescriptionProject}
            staffKeywordList={staffKeywordList}
            portfolioKeywordList={portfolioKeywordList}
          />
        )}
      </Router>
    </div>
  );
}

export default observer(App);
