import { types, flow, applySnapshot, onSnapshot } from "mobx-state-tree";
import * as api from "../utils/api";

const SimpleIndividualProj = types.model("SimpleIndvProj", {
  ProjectCode: types.number,
  StaffID: types.number,
  TotalHrs: types.number,
  Experience: types.maybeNull(types.string),
  experienceID: types.number,
});

const FullIndividualProj = types
  .model("FullIndvProj", {
    experienceID: types.number,
    ProjectCode: types.number,
    StaffID: types.number,
    TotalHrs: types.number,
    experience: types.maybeNull(types.string),
    JobNameLong: types.maybeNull(types.string),
    StartDate: types.maybeNull(types.string),
    EndDate: types.maybeNull(types.string),
    CentreName: types.maybeNull(types.string),
    AccountingCentreCode: types.maybeNull(types.number),
    PracticeName: types.maybeNull(types.string),
    BusinessCode: types.maybeNull(types.string),
    BusinessName: types.maybeNull(types.string),
    ProjectDirectorID: types.maybeNull(types.number),
    ProjectDirectorName: types.maybeNull(types.string),
    ProjectManagerID: types.maybeNull(types.number),
    ProjectManagerName: types.optional(types.string, ""),
    CountryName: types.optional(types.string, ""),
    Town: types.optional(types.string, ""),
    State: types.optional(types.string, ""),
    Latitude: types.maybeNull(types.number),
    Longitude: types.maybeNull(types.number),
    ScopeOfService: types.optional(types.string, ""),
    ScopeOfWorks: types.optional(types.array(types.frozen()), []),
    Keywords: types.optional(types.array(types.frozen()), []),
    imageURL: types.optional(types.array(types.frozen()), []),
    PercentComplete: types.number,
    ClientID: types.maybeNull(types.number),
    ClientName: types.optional(types.string, ""),
    ProjectURL: types.optional(types.string, ""),
    Confidential: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    patchProjectScopeOfWorks: flow(function* patchProjectScopeOfWorks(
      ProjectCode,
      newProjData
    ) {
      try {
        const project = yield api.patchProjectScopeOfWorks(
          ProjectCode,
          newProjData
        );
        self.ScopeOfWorks = project.ScopeOfWorks;
      } catch (error) {
        console.log("something went wrong on the patch", error);
      }
    }),
    addExperienceToProject: flow(function* addExperienceToProject(
      ProjectCode,
      newExperience,
      StaffID
    ) {
      try {
        const project = yield api.addExperienceToProject(
          ProjectCode,
          newExperience,
          StaffID
        );
        self.experience = project.experience;
      } catch (error) {
        console.log("something went wrong adding the experience", error);
      }
    }),
  }));

export const Projects = types
  .model("ProjList", {
    projList: types.array(SimpleIndividualProj),
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

export const FullDescriptiveProjects = types
  .model("FullProjectList", {
    fullProjList: types.array(FullIndividualProj),
    isLoading: true,
    fullProjListWithId: types.optional(types.array(types.frozen()), []),
  })
  .actions((self) => ({
    fetchProjects: flow(function* fetchProjects(staffID) {
      try {
        const data = yield api.getProjectsPerUser(staffID);
        self.fullProjList = data;
        self.isLoading = false;
        const projWithId = data.map((project) => ({
          projId: project.ProjectCode,
          project: project,
        }));
        self.fullProjListWithId = projWithId;
      } catch (error) {
        console.log("something went wrong on the fetch", error);
      }
    }),
  }));

export const FullDescriptionProject = types
  .model("FullDescriptionProject", {
    fullProjDescription: types.array(FullIndividualProj),
    isLoading: true,
  })
  .actions((self) => ({
    patchProjectScopeOfWorks: flow(function* patchProjectScopeOfWorks(
      ProjectCode,
      newProjData
    ) {
      try {
        const project = yield api.patchProjectScopeOfWorks(
          ProjectCode,
          newProjData
        );
        self.fullProjDescription.ScopeOfWorks = project.ScopeOfWorks;
        self.isLoading = false;
      } catch (error) {
        console.log("something went wrong on the patch", error);
      }
    }),
    addExperienceToProject: flow(function* addExperienceToProject(
      ProjectCode,
      newExperience,
      StaffID
    ) {
      try {
        const project = yield api.addExperienceToProject(
          ProjectCode,
          newExperience,
          StaffID
        );

        self.fullProjDescription.experience = project.experience;
        self.isLoading = false;
      } catch (error) {
        console.log("something went wrong adding the experience", error);
      }
    }),
  }));
