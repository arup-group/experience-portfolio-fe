import React from "react";
import Photo from "./Photo";
import ProfInfo from "./ProfInfo";
import IntroParag from "./IntroParag";
import KeyStatement from "./KeyStatement";

const PersonalCVPage = () => {
  return (
    <main>
      <div className="PersonalCVPage">
        <Photo />
        <ProfInfo />
        <IntroParag />
        <KeyStatement />
      </div>
    </main>
  );
};

export default PersonalCVPage;
