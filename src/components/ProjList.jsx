import React, { Component } from "react";

import { observer } from "mobx-react";
import ProjectCard from "./ProjectCard";
import { Draggable } from "react-beautiful-dnd";

class ProjList extends Component {
  render() {
    const { fullProjList } = this.props.fullDescProjList;

    return (
      <ul>
        {fullProjList.map((project, index) => {
          const {
            // JobNameLong,
            // ScopeOfWorks,
            // Town,
            // EndDate,
            ProjectCode,
            // experience,
            // } = project.project;
          } = project;
          return (
            <Draggable
              draggableId={`${ProjectCode}`}
              key={ProjectCode}
              index={index}
              // offsetParent =
              // bounds="parent"
              // axis="y"
            >
              {(provided) => (
                <div
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                >
                  {/* <StyledProjectCard> */}
                  <ProjectCard
                    id={ProjectCode}
                    // key={ProjectCode}
                    project={project}
                    provided={provided}
                    index={index}
                    fullDescProjList={this.props.fullDescProjList}
                    StaffID={this.props.StaffID}
                  />
                  {/* </StyledProjectCard> */}
                </div>
              )}
            </Draggable>
          );
        })}
      </ul>
    );
  }
}

export default observer(ProjList);
