import { types, flow } from "mobx-state-tree";
import * as api from "../utils/api";
import { Projects } from "./Projects";

export const IndividualUser = types
  .model("CurrentUser", {
    StaffID: types.number,
    StaffName: types.string,
    Email: types.string,
    LocationName: types.string,
    StartDate: types.string,
    JobTitle: types.string,
    GradeLevel: types.number,
    DisciplineName: types.string,
    imgURL: types.maybeNull(types.string),
    careerStart: types.maybeNull(types.string),
    nationality: types.maybeNull(types.string),
    qualifications: types.optional(types.array(types.frozen()), []),
    professionalAssociations: types.optional(types.array(types.frozen()), []),
    committees: types.optional(types.array(types.frozen()), []),
    publications: types.optional(types.array(types.frozen()), []),
    highLevelDescription: types.maybeNull(types.string),
    valueStatement: types.maybeNull(types.string),
    ProjectCount: types.maybeNull(types.number),
    TotalHrs: types.maybeNull(types.number),
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
    portfolioStaff: types.array(IndividualUser),
    noResults: false,
    projects: types.optional(types.array(types.frozen()), []),
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
    removeUser() {
      self.currentUser = [];
    },
    editUserMetaData: flow(function* editUserMetaData(staffID, newMetaData) {
      try {
        const data = yield api.patchUserMetaData(staffID, newMetaData);
        for (const [key, value] of Object.entries(data)) {
          self.currentUser[0][key] = value;
        }
      } catch (error) {
        console.log("something went wrong on the patch", error);
      }
    }),
    fetchMetaData: flow(function* fetchMetaData(staffID) {
      try {
        self.currentUser = [];
        const data = yield api.getUsers(staffID);
        self.currentUser.push(data);
        self.projList.fetchProjects(staffID);
        self.isLoading = false;
      } catch (error) {
        console.log("something went wrong on the fetch", error);
      }
    }),
    postUserImage: flow(function* postUserImage(staffID, imgFile) {
      try {
        const data = yield api.postUserImage(staffID, imgFile);
        console.log(data);
        self.currentUser[0].imgURL = data.imgURL;
      } catch (error) {
        console.log("something went wrong with image upload", error);
      }
    }),
    fetchPortfolioStaff: flow(function* fetchPortfolioStaff(searchQueriesObj) {
      try {
        self.isLoading = true;
        const data = yield api.getPortfolioStaff(searchQueriesObj);
        if (data !== "No matching users found") {
          self.portfolioStaff = data.staffList;
          self.projects = data.projects;
          self.isLoading = false;
        }
      } catch (error) {
        self.noResults = true;
        console.log("something went wrong on the fetch", error);
      }
    }),
    clearSearch() {
      self.portfolioStaff = [];
    },
  }));
