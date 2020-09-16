import { types } from "mobx-state-tree";

const ProjectInfo = types.model("ProjectInfo", {
  projNo: types.optional(types.number, 0),
  projName: types.optional(types.string, " "),
  generalDescription: types.optional(types.string, " "),
  personalContribution: types.optional(types.string, " "),
  projectValue: types.optional(types.string, " "),
});

export default ProjectInfo;
