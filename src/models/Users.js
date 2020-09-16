import { types, flow } from "mobx-state-tree";
import * as api from "../utils/api";

export const User = types
  .model("User", {
    StaffID: 0,
    StaffName: "",
    Email: "",
    LocationName: "",
    StartDate: "",
    JobTitle: "",
    GradeLevel: 0,
    DisciplineName: "",
    imgUrl: "",
    careerStart: "",
    nationality: "",
    qualifications: "",
    professionalAssociations: "",
    committees: "",
    publications: "",
    highLevelDescription: "",
    valueStatement: "",
  })
  .actions((self) => {
    const fetchUser = flow(function* fetchUser() {
      let data;
      try {
        data = yield api.getUsers();
        loadUser(data);
      } catch (error) {}
      return data;
    });
    const loadUser = (data) => {
      for (const [key, value] of Object.entries(data)) {
        self[key] = value;
      }
    };
    return { fetchUser, loadUser };
  });

// export const Users = types
//   .model("Users", {
//     userList: types.array(User, []),
//     state: types.maybeNull(
//       types.enumeration("State", ["pending", "done", "error"])
//     ),
//   })
//   .views((self) => ({
//     get users() {
//       return values(self.userList);
//     },
//   }))
//   .actions((self) => {
//     function updateUsers(json) {
//       json.forEach((userJson) => {
//         console.log(userJson);
//         self.userList.push(userJson);
//       });
//       self.state = "done";
//     }
//     const fetchUsers = flow(function* fetchUsers() {
//       // <- note the star, this a generator function!
//       self.userList = [];
//       self.state = "pending";
//       try {
//         // ... yield can be used in async/await style
//         const json = yield api.getUsers();
//         console.log(json);
//         updateUsers(json);
//       } catch (error) {
//         // ... including try/catch error handling
//         console.error("Failed to fetch users", error);
//         self.state = "error";
//       }
//     });
//     return {
//       updateUsers,
//       fetchUsers,
//     };
//   });
