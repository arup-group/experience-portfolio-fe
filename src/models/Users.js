import { types, flow } from "mobx-state-tree";
import * as api from "../utils/api";

const Store = types
  .model({
    githubProjects: types.array(types.frozen()),
    state: types.maybeNull(
      types.enumeration("State", ["pending", "done", "error"])
    ),
    isLoading: true,
  })
  .views((self) => ({
    get users() {
      return self.githubProjects.toJSON();
    },
  }))
  .actions((self) => ({
    fetchProjects: flow(function* fetchProjects() {
      // <- note the star, this a generator function!
      self.githubProjects = [];
      self.state = "pending";
      try {
        // ... yield can be used in async/await style
        self.githubProjects = yield api.getUsers();
        self.state = "done";
      } catch (error) {
        // ... including try/catch error handling
        console.error("Failed to fetch projects", error);
        self.state = "error";
      }
    }),
  }));

const store = Store.create({});
console.log(store);
// async actions will always return a promise resolving to the returned value
store.fetchProjects().then(() => {
  console.log(store);
  console.log(store.users[0]);
});

export default Store;
