import { types } from "mobx-state-tree";
import ProjectInfo from "./ProjectInfo";

const Projects = types
  .model("Projects", {
    projects: types.optional(types.array(ProjectInfo), []),
  })
  .views((self) => ({
    get projectNos() {
      return self.projects.map((project) => {
        return project.projNo;
      });
    },
  }));

export default Projects;
