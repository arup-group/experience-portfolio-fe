import React from "react";
import Photo from "./Photo";
import ProfInfo from "./ProfInfo";
import IntroParag from "./IntroParag";
import KeyStatement from "./KeyStatement";
import AllIndvProjs from "./AllIndvProjs";

import { observer } from "mobx-react";

const PersonalCVPage = (props) => {
  return (
    <>
      <main>
        <div className="PersonalCVPage">
          <Photo />
          <ProfInfo currentUser={props.currentUser} />
          <IntroParag currentUser={props.currentUser} />
          <KeyStatement currentUser={props.currentUser} />
          <AllIndvProjs currentUser={props.currentUser} />
        </div>
      </main>
    </>
  );
};

export default observer(PersonalCVPage);
