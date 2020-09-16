import React from "react";
import Slider from "./Slider";
import UserCard from "./UserCard";

const Header = ({ staffMeta }) => {
  return (
    <header style={{ display: "flex" }}>
      <img
        src="https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg"
        alt="placeholder"
        style={{ height: 200 }}
      />
      <Slider />
      <UserCard staffMeta={staffMeta} />
    </header>
  );
};

export default Header;
