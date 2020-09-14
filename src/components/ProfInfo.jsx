import React from "react";

const ProfInfo = () => {
  return (
    <section className="profInfo">
      <h3> Professional Info </h3>
      <h5> Profession: </h5> <p> Engineer</p>
      <h5> Current Position: </h5>
      <p> Senior Engineer</p>
      <h5> Joined Arup: </h5>
      <p> Sept. 2010</p>
      <h5> Years of experience: </h5>
      <p> 10 years</p>
      <h5> Qualifications: </h5>
      <>
        <ul className="profInfoList">
          <li> MEng Civil Engineering</li>
          <li>PhD Computational Hydraulics</li>
        </ul>
        <button>Update qualifications!</button>
        <h5> Languages: </h5>
        <ul className="profInfoList">
          <li>English</li>
          <li>Cantonese</li>
        </ul>
        <button>Update languages!</button>
        <h5> Publications: </h5>
        <ul className="profInfoList">
          <li>Article 1</li>
          <li>Article 2</li>
        </ul>
        <button>Update publications!</button>
      </>
    </section>
  );
};

export default ProfInfo;
