import React from "react";
import UserCard from "./UserCard";
import Login from "./Login";

// import utilities from rach router
import { Link } from "@reach/router";
// import of mobx components
import { observer } from "mobx-react";
import HeaderInfo from "./HeaderInfo";

function Header(props) {
  return (
    <header style={{ display: "flex" }}>
      <Link to="/">
        <img
          src="https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1423312535/pg8bkx7fn67810xun2yp.png"
          alt="placeholder"
          style={{ height: 200 }}
        />
      </Link>
      <HeaderInfo infoViews={props.infoViews} />
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
