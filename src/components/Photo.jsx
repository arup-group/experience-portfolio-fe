import React from "react";

const Photo = () => {
  return (
    <>
      <div className="userPhoto">
        <h3>User Name</h3>
        <img
          src="https://i.imgur.com/jjthoSOb.jpg"
          title="source: imgur.com"
          alt="puppy smiling"
        />{" "}
        <br />
        <button> Update Image! </button>
      </div>
    </>
  );
};

export default Photo;
