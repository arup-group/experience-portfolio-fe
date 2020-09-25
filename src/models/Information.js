import { types, flow } from "mobx-state-tree";
import * as api from "../utils/api";

export const Information = types
  .model("Information", {
    ProjectCode: types.array(types.frozen(), []),
    ClientName: types.array(types.frozen(), []),
    CentreName: types.array(types.frozen(), []),
    BusinessName: types.array(types.frozen(), []),
    CountryName: types.array(types.frozen(), []),
    Town: types.array(types.frozen(), []),
    State: types.array(types.frozen(), []),
    StaffID: types.array(types.frozen(), []),
    JobTitle: types.array(types.frozen(), []),
    LocationName: types.array(types.frozen(), []),
    DisciplineName: types.array(types.frozen(), []),
    GradeLevel: types.array(types.frozen(), []),
  })
  .views((self) => ({
    get mainStatement() {
      return `Currently managing ${self.StaffID.length} users and ${self.ProjectCode.length} projects`;
    },
    get clientStatement() {
      return `Includes ${self.ClientName.length} clients in ${self.CountryName.length} different countries`;
    },
    get randomStatementBusiness() {
      return `Projects from ${
        self.BusinessName.length
      } different businesses, for example ${
        self.BusinessName[
          Math.floor(Math.random() * (self.BusinessName.length - 2 - 1)) + 1
        ]
      }`;
    },
  }))
  .actions((self) => ({
    getInfo: flow(function* getInfo() {
      try {
        const data = yield api.getInfo();
        for (const [key, value] of Object.entries(data)) {
          self[key].push(...value);
        }
      } catch (error) {
        console.log("error in fetching staff keywords", error);
      }
    }),
  }));
