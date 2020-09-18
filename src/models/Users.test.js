import { getSnapshot, onSnapshot } from "mobx-state-tree";
import { IndividualUser, User } from "./Users";

it("should create an instance of the model", () => {
  const user = IndividualUser.create({
    DisciplineName: "Structural Engineering",
    Email: "Sam.Styles@arup.com",
    GradeLevel: 6,
    JobTitle: "Senior Engineer",
    LocationName: "Manchester Office",
    StaffID: 37704,
    StaffName: "Samuel Styles",
    StartDate: "2007-09-05T23:00:00.000Z",
    careerStart: null,
    committees: null,
    highLevelDescription: null,
    imgURL: null,
    nationality: null,
    professionalAssociations: null,
    publications: null,
    qualifications: null,
    // valueStatement: null,
  });
  expect(user.GradeLevel).toBe(6);
  expect(user.committees).toBe(null);
  expect(user.valueStatement).toBe(null);
  user.changeStaffName("Sam Styles");
  expect(user.StaffName).toBe("Sam Styles");
});
it("should create an individual user for the session", () => {
  const indUser = User.create();
  const states = [];
  onSnapshot(indUser, (snapshot) => {
    states.push(snapshot);
  });
  indUser.addUser({
    DisciplineName: "Structural Engineering",
    Email: "Sam.Styles@arup.com",
    GradeLevel: 6,
    JobTitle: "Senior Engineer",
    LocationName: "Manchester Office",
    StaffID: 37704,
    StaffName: "Samuel Styles",
    StartDate: "2007-09-05T23:00:00.000Z",
    careerStart: null,
    committees: null,
    highLevelDescription: null,
    imgURL: null,
    nationality: null,
    professionalAssociations: null,
    publications: null,
    qualifications: null,
    valueStatement: null,
  });

  expect(indUser.currentUser.length).toBe(1);
  expect(indUser.currentUser[0].nationality).toBe(null);
  indUser.currentUser[0].changeStaffName("Sam Styles");
  expect(indUser.currentUser[0].StaffName).toBe("Sam Styles");
  expect(getSnapshot(indUser)).toMatchSnapshot();

  expect(states).toMatchSnapshot();
});
