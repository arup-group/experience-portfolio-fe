import { types } from "mobx-state-tree";

const UserInfo = types
  .model("UserInfo", {
    name: types.optional(types.string, ""),
    photo: types.optional(types.string, ""),
    profession: types.optional(types.string, ""),
    currentPosition: types.optional(types.string, ""),
    joinedArup: types.optional(types.string, ""),
    yearsOfExperience: types.optional(types.number, 0),
    qualifications: types.optional(types.string, ""),
    languages: types.optional(types.string, ""),
    publications: types.optional(types.string, ""),
    introParagraph: types.optional(types.string, ""),
    keyStatement: types.optional(types.string, ""),
  })
  .actions((self) => ({
    changePhoto(newPhoto) {
      self.photo = newPhoto;
    },
    changeIntroParag(newIntro) {
      self.introParagraph = newIntro;
    },
    changeKeyStatement(newKey) {
      self.keyStatement = newKey;
    },
  }));

export default UserInfo;
