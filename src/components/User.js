import React from "react";

const User = (prosp) => {
  return (
    <span className="user">
      <span className="name">{prosp.userData.name}</span>
      <span className="handle">{prosp.userData.handle}</span>
    </span>
  );
};

export default User;
