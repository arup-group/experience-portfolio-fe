import { types } from "mobx-state-tree";
import UserInfo from "./UserInfo";

const Users = types.model("Users", { users: types.array(UserInfo) });
