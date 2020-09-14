import { types } from "mobx-state-tree";

const User = types.model("User", {
  name: types.string,
  profession: types.string,
  currentPosition: types.string,
  joinedArup: types.string,
  yearsOfExperience: types.number,
  qualifications: types.string,
  languages: types.string,
  publications: types.string,
});

export default User;
