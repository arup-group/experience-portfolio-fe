import React from "react";
// import Slider from "./Slider";
import UserCard from "./UserCard";
import { observer } from "mobx-react";
import Login from "./Login";

function Header(props) {
  return (
    <header style={{ display: "flex" }}>
      <img
        src="https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1423312535/pg8bkx7fn67810xun2yp.png"
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
