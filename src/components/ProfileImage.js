import React from "react";

const ProfileImage = (prosp) => {
  return (
    <div>
      <img src={prosp.image} className="profile" alt="profile" />
    </div>
  );
};

export default ProfileImage;
