import React from "react";
// import Slider from "./Slider";
import UserCard from "./UserCard";

import { User } from "../models/Users";

const currentUser = User.create({});
// currentUser.addUser({
//   DisciplineName: "Structural Engineering",
//   Email: "Sam.Styles@arup.com",
//   GradeLevel: 6,
//   JobTitle: "Senior Engineer",
//   LocationName: "Manchester Office",
//   StaffID: 37704,
//   StaffName: "Samuel Styles",
//   StartDate: "2007-09-05T23:00:00.000Z",
//   careerStart: null,
//   committees: null,
//   highLevelDescription: null,
//   imgUrl: null,
//   nationality: null,
//   professionalAssociations: null,
//   publications: null,
//   qualifications: null,
//   valueStatement: null,
// });

function Header() {
  return (
    <header style={{ display: "flex" }}>
      <img
        src="https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg"
        alt="placeholder"
        style={{ height: 200 }}
      />
      <UserCard currentUser={currentUser} />
    </header>
  );
}

export default Header;
