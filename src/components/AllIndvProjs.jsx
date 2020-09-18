import React from "react";

// React Components
import ProjList from "./ProjList";

// mobx-state-tree imports
import { observer } from "mobx-react";

const AllIndvProjs = (props) => {
  return (
    <main>
      <section>
        <button
          onClick={(e) => {
            e.preventDefault();
            props.fullDescProjList.fetchProjects();
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
        <ProjList />
      </section>
    </main>
  );
};

export default observer(AllIndvProjs);
