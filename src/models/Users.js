import { types, flow } from "mobx-state-tree";
import * as api from "../utils/api";
import { Projects } from "./Projects";

export const IndividualUser = types
  .model("CurrentUser", {
    DisciplineName: types.string,
    Email: types.string,
    GradeLevel: types.number,
    JobTitle: types.string,
    LocationName: types.string,
    StaffID: types.number,
    StaffName: types.string,
    StartDate: types.string,
    careerStart: types.maybeNull(types.string),
    committees: types.maybeNull(types.string),
    highLevelDescription: types.maybeNull(types.string),
    imgUrl: types.maybeNull(types.string),
    nationality: types.maybeNull(types.string),
    professionalAssociations: types.maybeNull(types.string),
    publications: types.maybeNull(types.string),
    qualifications: types.maybeNull(types.string),
    valueStatement: types.maybeNull(types.string),
  })
  .actions((self) => ({
    changeStaffName(newName) {
      self.StaffName = newName;
    },
  }));

export const User = types
  .model("User", {
    projList: types.optional(Projects, {}),
    currentUser: types.array(IndividualUser),
    isLoading: true,
  })
  .views((self) => ({
    get showUser() {
      return self.currentUser;
    },
  }))
  .actions((self) => ({
    addUser(newUser) {
      self.currentUser = [];
      self.currentUser.push(newUser);
    },
    fetchMetaData: flow(function* fetchMetaData() {
      try {
        self.currentUser = [];
        const data = yield api.getUsers(37704);
        self.currentUser.push(data);
        self.projList.fetchProjects();
        self.isLoading = false;
      } catch (error) {
        console.log("something went wrong on the fetch", error);
      }
    }),
  }));
