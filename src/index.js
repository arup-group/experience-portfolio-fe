import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { User } from "./models/Users";

const currentUser = User.create({});
// currentUser.addUser({
//   DisciplineName: "Structural Engineering",
//   Email: "Sam.Styles@arup.com",
//   GradeLevel: 6,
//   JobTitle: "Senior Engineer",
//   LocationName: "Manchester Office",
//   StaffID: 37704,
//   StaffName: "Samuel Styles",
//   StartDate: "2007-09-05T23:00:00.000Z",
//   careerStart: null,
//   committees: null,
//   highLevelDescription: null,
//   imgUrl: null,
//   nationality: null,
//   professionalAssociations: null,
//   publications: null,
//   qualifications: null,
//   valueStatement: null,
// });
currentUser.fetchUser();

ReactDOM.render(
  <App currentUser={currentUser} />,
  document.getElementById("root")
);
