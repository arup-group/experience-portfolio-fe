import React from "react";
import { observer } from "mobx-react";

const ProjectCard = (props) => {
  const {
    JobNameLong,
    ScopeOfWorks,
    Town,
    EndDate,
    ProjectCode,
    experience,
  } = props.project;
  return (
    <div>
      <h3>{JobNameLong}</h3>
      <h5>{Town}</h5>
      <p>{ScopeOfWorks}</p>
      <button>Modify project description!</button>
      <p>{experience}</p>
      <button>Add Experience!</button>
    </div>
  );
};

export default observer(ProjectCard);
