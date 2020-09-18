import React, { Component } from "react";

import { observer } from "mobx-react";
import ProjectCard from "./ProjectCard";

class ProjList extends Component {
  render() {
    const arrayProjects = this.props.fullDescProjList.fullProjList;
    return (
      <div className="projectsList">
        <ul className="projectsList">
          {arrayProjects.map((project) => {
            const {
              // JobNameLong,
              // ScopeOfWorks,
              // Town,
              // EndDate,
              ProjectCode,
              // experience,
            } = project;
            return (
              <li key={ProjectCode} className="indvProject">
                <ProjectCard project={project} />
                {/* <h3>{JobNameLong}</h3>
                <h5>{Town}</h5>
                <p>{ScopeOfWorks}</p>
                <p>{experience}</p> */}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default observer(ProjList);
