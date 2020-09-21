import React from "react";
// import Slider from "./Slider";
import UserCard from "./UserCard";
import { observer } from "mobx-react";
import Login from "./Login";

function Header(props) {
  return (
    <header style={{ display: "flex" }}>
      <img
        src="https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg"
        alt="placeholder"
        style={{ height: 200 }}
      />
      {props.currentUser.currentUser.length !== 0 ? (
        <UserCard
          currentUser={props.currentUser}
          fullDescProjList={props.fullDescProjList}
        />
      ) : (
        <Login currentUser={props.currentUser} />
      )}
    </header>
  );
}

export default observer(Header);
