import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { User } from "./models/Users";
import { Projects } from "./models/Projects";
import { onSnapshot } from "mobx-state-tree";

let initialState = {};
if (localStorage.getItem("userApp")) {
  initialState = JSON.parse(localStorage.getItem("userApp"));
}
const currentUser = User.create(initialState);
const userProjList = Projects.create({});

onSnapshot(currentUser, (snapshot) => {
  localStorage.setItem("userApp", JSON.stringify(snapshot));
});

ReactDOM.render(
  <App currentUser={currentUser} userProjList={userProjList} />,
  document.getElementById("root")
);
