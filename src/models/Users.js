import { types } from "mobx-state-tree";
import User from "./User";

const Users = types.model("Users", { users: types.array(User) });
