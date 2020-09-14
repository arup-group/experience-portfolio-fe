import React from "react";
import Photo from "./Photo";
import ProfInfo from "./ProfInfo";
import IntroParag from "./IntroParag";
import KeyStatement from "./KeyStatement";
import AllIndvProjs from "./AllIndvProjs";

const PersonalCVPage = () => {
  return (
    <main>
      <div className="PersonalCVPage">
        <Photo />
        <ProfInfo />
        <IntroParag />
        <KeyStatement />
        <AllIndvProjs />
      </div>
    </main>
  );
};

export default PersonalCVPage;
