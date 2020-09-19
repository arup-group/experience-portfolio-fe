import React, { Component } from "react";

// React Components
import ProjectCard from "./ProjectCard";

// mobx-state-tree imports
import { observer } from "mobx-react";

class AllIndvProjs extends Component {
  state = {
    projectsArray: [],
    isLoading: true,
  };

  render() {
    const { StaffID } = this.props.currentUser.currentUser[0];
    const { fullProjList } = this.props.fullDescProjList;
    const { projectsArray, isLoading } = this.state;

    return (
      <main>
        <section>
          <button
            onClick={(e) => {
              e.preventDefault();
              this.props.fullDescProjList.fetchProjects(StaffID);
              this.setState({
                // projectsArray: fullProjList,
                // isLoading: false,
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
        {
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
        }
      </main>
    );
  }
}

export default observer(AllIndvProjs);
