import React from "react";

// React Components
import ProjectCard from "./ProjectCard";
import ProjList from "./ProjList";

// mobx-state-tree imports
import { observer } from "mobx-react";

const AllIndvProjs = (props) => {
  const { StaffID } = props.currentUser.currentUser[0];
  return (
    <main>
      <section>
        <button
          onClick={(e) => {
            e.preventDefault();
            props.fullDescProjList.fetchProjects(StaffID);
          }}
        >
          Fetch all my projects
        </button>
        Filter by: <button>Project Type</button>
        <button>Project Value </button>
        <button>Latest </button>
        <button>Region </button>
      </section>
      <section>
        <ProjList fullDescProjList={props.fullDescProjList} />
      </section>
    </main>
  );
};

export default observer(AllIndvProjs);
