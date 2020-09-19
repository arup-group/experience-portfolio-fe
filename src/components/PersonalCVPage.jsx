import React from "react";

// React Components
import Photo from "./Photo";
import ProfInfo from "./ProfInfo";
import IntroParag from "./IntroParag";
import ValueStatement from "./ValueStatement";
import AllIndvProjs from "./AllIndvProjs";

// mobx-state-tree imports
import { observer } from "mobx-react";
// import { FullDescriptiveProjects } from "../models/Projects";

// create full descriptive project list from mobx
// const fullDescProjList = FullDescriptiveProjects.create({});

const PersonalCVPage = (props) => {
  return (
    <>
      <main>
        <div className="PersonalCVPage">
          <Photo currentUser={props.currentUser} />
          <ProfInfo currentUser={props.currentUser} />
          <IntroParag currentUser={props.currentUser} />
          <ValueStatement currentUser={props.currentUser} />
          <AllIndvProjs
            currentUser={props.currentUser}
            fullDescProjList={props.fullDescProjList}
          />
        </div>
      </main>
    </>
  );
};

export default observer(PersonalCVPage);
