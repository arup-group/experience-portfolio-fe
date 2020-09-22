import React, { Component } from "react";
import ProjectCard from "./ProjectCard";

import SaveWordDoc from "./SaveWordDoc";

// mobx-state-tree imports
import { observer } from "mobx-react";

import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { FullDescriptionProject } from "../models/Projects";
import FilterMenu from "./FilterMenu";

class AllIndvProjs extends Component {
  state = {
    projectsArray: this.props.fullDescProjList.fullProjList,
    projectsWithId: this.props.fullDescProjList.fullProjListWithId,
    isLoading: false,
  };
  reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  onDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }

    const reorderedProj = this.reorder(
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
    const { isLoading } = this.state;
    const { fullProjList, fullProjListWithId } = this.props.fullDescProjList;
    const { projectsArray, projectsWithId } = this.state;
    return (
      <main>
        <section>
          <button
            onClick={(e) => {
              e.preventDefault();
              this.props.fullDescProjList.fetchProjects(StaffID).then(() => {
                this.setState({
                  projectsArray: fullProjList,
                  projectsWithId: fullProjListWithId,
                });
              });
            }}
          >
            Fetch all my projects
          </button>
          <FilterMenu
            currentUser={this.props.currentUser}
            fullDescProjList={this.props.fullDescProjList}
          />
        </section>
        {this.props.fullDescProjList.noResults ? (
          <p>No results to the above query</p>
        ) : (
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
