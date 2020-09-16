import React from "react";
import AboutEP from "./AboutEP";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "@reach/router";
import { observer } from "mobx-react";

function HomePage(props) {
  const handleAdd = () => {
    props.currentUser.addUser({
      DisciplineName: "Structural Engineering",
      Email: "Sam.Styles@arup.com",
      GradeLevel: 6,
      JobTitle: "Senior Engineer",
      LocationName: "Manchester Office",
      StaffID: 37704,
      StaffName: "Sam Styles",
      StartDate: "2007-09-05T23:00:00.000Z",
      careerStart: null,
      committees: null,
      highLevelDescription: null,
      imgUrl: null,
      nationality: null,
      professionalAssociations: null,
      publications: null,
      qualifications: null,
      valueStatement: null,
    });
  };
  return (
    <div>
      <button onClick={handleAdd}>Magic!</button>
      {props.currentUser.currentUser.length !== 0 && (
        <h1>{props.currentUser.currentUser[0].StaffName}</h1>
      )}
      <Header />
      <AboutEP />
      <Link to={`/alex`}> Personal CV </Link>
      <Footer />
    </div>
  );
}

export default observer(HomePage);
