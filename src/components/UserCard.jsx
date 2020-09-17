import React from "react";
import { observer } from "mobx-react";
import { Link, navigate } from "@reach/router";

function UserCard(props) {
  const { StaffName, StaffID, LocationName } = props.currentUser.currentUser[0];
  return (
    <div>
      <h3>{StaffName}</h3>
      <p>{StaffID}</p>
      <p>{LocationName}</p>
      <Link to="/">
        <button
          onClick={(e) => {
            e.preventDefault();
            props.currentUser.removeUser();
            navigate("/");
          }}
        >
          Logout
        </button>
      </Link>
    </div>
  );
}

export default observer(UserCard);
