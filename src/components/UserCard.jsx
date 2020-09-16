import React from "react";

const UserCard = ({ staffMeta }) => {
  console.log(staffMeta);
  return (
    <div>
      <h3>{staffMeta.StaffName}</h3>
      <p>{staffMeta.StaffID}</p>
    </div>
  );
};
export default UserCard;
