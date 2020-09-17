import React from "react";
import { observer } from "mobx-react";

function UserCard(props) {
  const { StaffName, StaffID, LocationName } = props.currentUser.currentUser[0];
  return (
    <div>
      <h3>{StaffName}</h3>
      <p>{StaffID}</p>
      <p>{LocationName}</p>
    </div>
  );
}

export default observer(UserCard);
