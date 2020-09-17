import React from "react";
import { observer } from "mobx-react";

const ProfInfo = (props) => {
  const {
    StaffID,
    StaffName,
    Email,
    LocationName,
    StartDate,
    JobTitle,
    GradeLevel,
    DisciplineName,
    imgUrl,
    careerStart,
    highLevelDescription,
    valueStatement,
    nationality,
    qualifications,
    professionalAssociations,
    committees,
    publications,
  } = props.currentUser.currentUser[0];

  return (
    <section className="profInfo">
      <h3> Professional Info </h3>
      <h5> Profession: </h5> <p>{JobTitle}</p> <p>{DisciplineName}</p>
      <h5> Location: </h5> <p>{LocationName}</p>
      <h5> Joined Arup: </h5>
      <p> {StartDate} </p>
      <h5> Years of experience: </h5>
      <p> </p>
      <h5> Qualifications: </h5>
      <p> {qualifications} </p>
      <h5> Publications: </h5>
      <p> {publications} </p>
      <h5> Nationality: </h5>
      <p> {nationality} </p>
      <button>Update Professional Info!</button>
    </section>
  );
};

export default observer(ProfInfo);
