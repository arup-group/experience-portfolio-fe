import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import { observer, Observer } from "mobx-react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { FullDescriptionProject } from "../models/Projects";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

class AllIndvProjs extends Component {
  state = {
    projectsArray: [],
    projectsWithId: [],
  };

  onDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }

    const reorderedProj = reorder(
      this.state.projectsWithId,
      source.index,
      destination.index
    );

    this.setState({
      projectsWithId: reorderedProj,
    });
  };

  render() {
    const { StaffID } = this.props.currentUser.currentUser[0];
    const {
      fullProjList,
      fullProjListWithId,
      isLoading,
    } = this.props.fullDescProjList;
    const { projectsArray, projectsWithId } = this.state;
    return (
      <main>
        <section>
          <button
            onClick={(e) => {
              e.preventDefault();
              this.props.fullDescProjList.fetchProjects(StaffID);
              this.setState({
                projectsArray: fullProjList,
                projectsWithId: fullProjListWithId,
              });
            }}
          >
            Fetch all my projects
          </button>
          Filter by: <button>Project Type</button>
          <button>Project Value </button>
          <button>Latest </button>
          <button>Region </button>
        </section>
        {isLoading === false && (
          <DragDropContext onDragEnd={this.onDragEnd}>
            <section>
              <Droppable droppableId="droppable">
                {(provided) => (
                  <div
                    className="projectsList"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <ul className="projectsList">
                      {fullProjListWithId.map((project, index) => (
                        <ProjectCard
                          projectInfo={project.project}
                          projId={project.projId}
                          index={index}
                          key={project.projId}
                          StaffID={StaffID}
                          fullDescProjList={this.props.fullDescProjList}
                        />
                      ))}

                      {provided.placeholder}
                    </ul>
                  </div>
                )}
              </Droppable>
            </section>
          </DragDropContext>
        )}
      </main>
    );
  }
}

export default observer(AllIndvProjs);
