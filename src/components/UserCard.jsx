import React from "react";
import { observer } from "mobx-react";

function UserCard(props) {
  console.log(props);
  props.currentUser.fetchUser();
  return (
    <div>
      <label htmlFor="staffNumber">Staff Number:</label>
      <input type="number" name="staffNumber" id="staffNumber" />
      <button
        onClick={(e) => {
          e.preventDefault();
          props.currentUser.fetchUser();
          console.log(props.currentUser);
        }}
      >
        Sign In
      </button>
    </div>
  );
}

export default observer(UserCard);
