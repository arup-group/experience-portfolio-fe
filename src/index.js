import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { User } from "./models/Users";
import { Projects } from "./models/Projects";

const currentUser = User.create({});

const userProjList = Projects.create({});

currentUser.fetchMetaData();

ReactDOM.render(
  <App currentUser={currentUser} userProjList={userProjList} />,
  document.getElementById("root")
);
