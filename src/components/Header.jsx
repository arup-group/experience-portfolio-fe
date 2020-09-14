import React from "react";
import Slider from "./Slider";
import UserCard from "./UserCard";

function Header() {
  return (
    <header style={{ display: "flex" }}>
      <img
        src="https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg"
        alt="placeholder"
        style={{ height: 200 }}
      />
      <Slider />
      <UserCard />
    </header>
  );
}

export default Header;
