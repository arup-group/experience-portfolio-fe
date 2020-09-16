import React, { Component } from "react";
import { observer } from "mobx-react";

import { User } from "../models/Users";

const usersList = User.create({});

class UserCard extends Component {
  componentDidMount() {
    usersList.fetchUser();
  }
  render() {
    return (
      <div>
        <h1>{usersList.StaffID}</h1>
        <h1>{usersList.StaffName}</h1>
      </div>
    );
  }
}

export default observer(UserCard);
