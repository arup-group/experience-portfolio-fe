import { types, flow } from "mobx-state-tree";
import * as api from "../utils/api";

export const StaffKeywords = types
  .model("KeywordList", {
    keywordList: types.array(types.frozen(), []),
  })
  .actions((self) => ({
    fetchStaffKeywords: flow(function* fetchStaffKeywords(staffID) {
      try {
        const data = yield api.getStaffKeywords(staffID);
        for (const [key, value] of Object.entries(data)) {
          self.keywordList.push({ [key]: value });
        }
      } catch (error) {
        console.log("error in fetching staff keywords", error);
      }
    }),
  }));

export const PortfolioKeywords = types
  .model("KeywordList", {
    keywordList: types.array(types.frozen(), []),
  })
  .actions((self) => ({
    fetchPortfolioKeywords: flow(function* fetchPortfolioKeywords() {
      try {
        const data = yield api.getAllPortfolioKeywords();
        for (const [key, value] of Object.entries(data)) {
          self.keywordList.push({ [key]: value });
        }
      } catch (error) {
        console.log("error in fetching staff keywords", error);
      }
    }),
  }));
