import React, { Component } from "react";

import { observer } from "mobx-react";
import ProjectCard from "./ProjectCard";
import { Draggable } from "react-beautiful-dnd";

class ProjList extends Component {
  render() {
    const { fullProjListWithId } = this.props.fullDescProjList;

    return (
      <div className="projectsList">
        <ul className="projectsList">
          {fullProjListWithId.map((project, index) => {
            const {
              // JobNameLong,
              // ScopeOfWorks,
              // Town,
              // EndDate,
              ProjectCode,
              // experience,
            } = project.project;
            return (
              <Draggable
                draggableId={`${ProjectCode}`}
                key={ProjectCode}
                index={index}
              >
                {(provided) => (
                  <ProjectCard
                    id={project.projId}
                    key={project.projId}
                    project={project.project}
                    provided={provided}
                    index={index}
                    fullDescProjList={this.props.fullDescProjList}
                    StaffID={this.props.StaffID}
                  />
                )}
              </Draggable>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default observer(ProjList);
