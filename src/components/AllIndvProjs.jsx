import React, { Component, Fragment } from "react";
import ProjectCard from "./ProjectCard";
import ProjList from "./ProjList";

import SaveWordDoc from "./SaveWordDoc";

// mobx-state-tree imports
import { observer } from "mobx-react";

import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { FullDescriptionProject } from "../models/Projects";
import FilterMenu from "./FilterMenu";
import KeywordsMenu from "./KeywordsMenu";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

class AllIndvProjs extends Component {
  state = {
    projectsArray: this.props.fullDescProjList.fullProjList,
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
    const reorderedProj = reorder(
      this.props.fullDescProjList.fullProjList,
      source.index,
      destination.index
    );
    this.props.fullDescProjList.updateReorderedList(reorderedProj);
  };

  render() {
    const { StaffID } = this.props.currentUser.currentUser[0];
    const { isLoading } = this.state;
    const { fullProjList } = this.props.fullDescProjList;
    const { projectsArray } = this.state;
    return (
      <main>
        <section>
          <button
            disabled={this.props.fullDescProjList.isLoading}
            onClick={(e) => {
              e.preventDefault();
              this.props.staffKeywordList.fetchStaffKeywords(StaffID);
              this.props.fullDescProjList.fetchProjects(StaffID).then(() => {
                this.setState({
                  projectsArray: fullProjList,
                });
              });
            }}
          >
            {this.props.fullDescProjList.isLoading
              ? "Loading..."
              : "Fetch all staff projects"}
          </button>
          <FilterMenu
            currentUser={this.props.currentUser}
            fullDescProjList={this.props.fullDescProjList}
          />
          <KeywordsMenu
            currentUser={this.props.currentUser}
            fullDescProjList={this.props.fullDescProjList}
            staffKeywordList={this.props.staffKeywordList}
          />
          <SaveWordDoc
            staffMeta={this.props.currentUser.currentUser[0]}
            projects={this.props.fullDescProjList.fullProjList}
          />
        </section>

        {isLoading === false && (
          <div>
            {this.props.fullDescProjList.noResults ? (
              <p>No results to the above query</p>
            ) : (
              <section>
                <section>
                  {this.props.fullDescProjList.fullProjList.length > 0 && (
                    <p>
                      Now showing:{" "}
                      {this.props.fullDescProjList.fullProjList.length} /{" "}
                      {this.props.currentUser.projList.projList.length} projects
                    </p>
                  )}
                </section>
                <section className="draggableContainer">
                  <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppableId">
                      {(provided) => (
                        <div
                          className="projectsList"
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {" "}
                          <ul className="projectsList">
                            <ProjList
                              fullDescProjList={this.props.fullDescProjList}
                              StaffID={StaffID}
                              provided={provided}
                            />

                            {provided.placeholder}
                          </ul>
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                </section>
              </section>
            )}
          </div>
        )}
      </main>
    );
  }
}

export default observer(AllIndvProjs);
