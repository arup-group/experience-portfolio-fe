import React, { Component } from "react";
import Projects from "../models/Projects";

class ProjList extends Component {
  render() {
    return (
      <div className="projectsList">
        <ul>
          {/* {projects.map((project) => {
            return (
              <li className="indvProject" key={project.projName}>
                <h5> {project.projName}</h5>
                <p> {project.generalDescription} </p>
                <h5> Proj 1 - Individual Project Contribution</h5>
                <p>{project.personalContribution}</p>
                <p>Project Value: {project.projectValue}</p>
                <button>Update project!</button> <button> Show/Hide</button>
              </li>
            );
          })} */}
        </ul>
      </div>
    );
  }
}

export default ProjList;

// const listProjects = Projects.create({
//   projects: [
//     {
//       projNo: 13,
//       projName: "Project 1",
//       generalDescription: "This is project 1",
//       personalContribution: "I worked on this project",
//       projectValue: "£20 mil",
//     },
//     {
//       projNo: 15,
//       projName: "Project 2",
//       generalDescription: "This is project 2",
//       personalContribution: "I managed this project",
//       projectValue: "£25 mil",
//     },
//   ],
// });

// const { projects } = listProjects;

// const projNos = listProjects.projectNos;
// console.log(projNos);

// const columns = {
//   "column-1": {
//     id: "column-1",
//     title: "Project List",
//     projNums: projNos,
//   },
// };
