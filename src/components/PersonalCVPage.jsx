import React from "react";
import Photo from "./Photo";
import ProfInfo from "./ProfInfo";
import IntroParag from "./IntroParag";
import ValueStatement from "./ValueStatement";
import AllIndvProjs from "./AllIndvProjs";

import { observer } from "mobx-react";

const PersonalCVPage = (props) => {
  return (
    <>
      <main>
        <div className="PersonalCVPage">
          <Photo currentUser={props.currentUser} />
          <ProfInfo currentUser={props.currentUser} />
          <IntroParag currentUser={props.currentUser} />
          <ValueStatement currentUser={props.currentUser} />
          <AllIndvProjs currentUser={props.currentUser} />
        </div>
      </main>
    </>
  );
};

export default observer(PersonalCVPage);
