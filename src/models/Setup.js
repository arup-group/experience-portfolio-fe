import { RootProjects } from "./Projects";

export const setupRootProjects = () => {
  const rootProjects = RootProjects.create({});
  return { rootProjects };
};
