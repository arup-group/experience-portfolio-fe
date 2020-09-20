import React, { Component } from "react";

// React Components
import ProjectCard from "./ProjectCard";

// mobx-state-tree imports
import { observer } from "mobx-react";
import { DragDropContext } from "react-beautiful-dnd";

class AllIndvProjs extends Component {
  state = {
    projectsArray: [],
    projectsWithId: [],
  };

  render() {
    const { StaffID } = this.props.currentUser.currentUser[0];
    const { fullProjList, fullProjListWithId } = this.props.fullDescProjList;
    const { projectsArray } = this.state;

    return (
      <main>
        <section>
          <button
            onClick={(e) => {
              e.preventDefault();
              this.props.fullDescProjList
                .fetchProjects(StaffID)
                .then((result) => console.log(result));
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
        <DragDropContext onDragEnd={this.onDragEnd}>
          <section className="projectsList">
            <ul className="projectsList">
              {fullProjList.map((project) => {
                const { ProjectCode } = project;
                return (
                  <li key={ProjectCode} className="indvProject">
                    <ProjectCard project={project} />
                  </li>
                );
              })}
            </ul>
          </section>
        </DragDropContext>
      </main>
    );
  }
}

export default observer(AllIndvProjs);
