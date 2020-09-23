import { types, flow } from "mobx-state-tree";
import * as api from "../utils/api";

export const StaffKeywords = types
  .model("StaffKeywords", {
    staffKeywordList: types.array(types.frozen(), []),
  })
  .actions((self) => ({
    fetchStaffKeywords: flow(function* fetchStaffKeywords(staffID) {
      try {
        const data = yield api.getStaffKeywords(staffID);
        for (const [key, value] of Object.entries(data)) {
          self.staffKeywordList.push({ [key]: value });
        }
        console.log(self.staffKeywordList);
      } catch (error) {
        console.log("error in fetching staff keywords", error);
      }
    }),
  }));
