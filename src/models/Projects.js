import { types, flow } from "mobx-state-tree";
import * as api from "../utils/api";

export const IndividualProj = types.model("IndvProj", {
  ProjectCode: types.number,
  StaffID: types.number,
  TotalHrs: types.number,
  Experience: types.maybeNull(types.string),
  experienceID: types.number,
});

export const Projects = types
  .model("ProjList", {
    projList: types.array(IndividualProj),
    isLoading: true,
  })
  .actions((self) => ({
    fetchProjects: flow(function* fetchProjects() {
      try {
        const data = yield api.getProjectsPerUser();
        self.projList = data;
        self.isLoading = false;
      } catch (error) {
        console.log("something went wrong on the fetch", error);
      }
    }),
  }));
