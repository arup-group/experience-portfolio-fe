import React from "react";
import { observer } from "mobx-react";
import { Draggable } from "react-beautiful-dnd";

const ProjectCard = (props) => {
  const {
    JobNameLong,
    ScopeOfWorks,
    Town,
    EndDate,
    ProjectCode,
    experience,
  } = props.projectInfo;

  return (
    <Draggable
      key={`${props.projId}`}
      draggableId={`${props.projId}`}
      index={props.index}
    >
      {(provided) => (
        <li
          key={props.projId}
          className="indvProject"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <h3>{JobNameLong}</h3>
          <h5>{Town}</h5>
          <p>{ScopeOfWorks}</p>
          <button>Modify project description!</button>
          <p>{experience}</p>
          <button>Add Experience!</button>
        </li>
      )}
    </Draggable>
  );
};

export default observer(ProjectCard);
