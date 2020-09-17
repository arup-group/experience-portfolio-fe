import { types, flow } from "mobx-state-tree";
import * as api from "../utils/api";

export const IndividualProj = types.model("IndvProj", {
  ProjectCode: types.number,
  StaffID: types.number,
  TotalHrs: types.number,
  Experience: types.maybeNull(types.string),
  experienceID: types.number,

  // ProjectCode: types.number,
  // JobNameLong: types.maybeNull(types.string),
  // StartDate: types.maybeNull(types.number),
  // EndDate: types.maybeNull(types.number),
  // CentreName: types.maybeNull(types.string),
  // AccountingCentreCode: types.maybeNull(types.number),
  // PracticeName: types.maybeNull(types.string),
  // BusinessCode: types.maybeNull(types.string),
  // BusinessName: types.maybeNull(types.string),
  // ProjectDirectorID: types.maybeNull(types.number),
  // ProjectDirectorName: types.maybeNull(types.string),
  // ProjectManagerID: types.maybeNull(types.number),
  // ProjectManagerName: types.optional(types.string, ""),
  // CountryName: types.optional(types.string, ""),
  // Town: types.optional(types.string, ""),
  // ScopeOfService: types.optional(types.string, ""),
  // ScopeOfWorks: types.optional(types.string, ""),
  // Latitude: types.maybeNull(types.number),
  // Longitude: types.maybeNull(types.number),
  // State: types.optional(types.string, ""),
  // PercentComplete: types.optional(types.string, ""),
  // ClientID: types.maybeNull(types.number),
  // ClientName: types.optional(types.string, ""),
  // ProjectURL: types.optional(types.string, ""),
  // Confidential: types.optional(types.boolean, false),
  // imageURL: types.maybeNull(types.string),
  // StaffID: types.number,
  // TotalHrs: types.number,
  // experience: types.maybeNull(types.string),
  // experienceID: types.number,
});

export const Projects = types
  .model("ProjList", {
    projList: types.array(IndividualProj),
    isLoading: true,
  })
  .actions((self) => ({
    fetchProjects: flow(function* fetchProjects(staffID) {
      try {
        const data = yield api.getProjectsPerUser(staffID);
        self.projList = data;
        self.isLoading = false;
      } catch (error) {
        console.log("something went wrong on the fetch", error);
      }
    }),
  }));
