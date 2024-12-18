import React from "react";
import ProfilePhoto from "../assets/me.jpeg";

const Profile = () => {
  return (
    <div className="profile section-margin-3">
      <img
        className="profile__img profile__img--animation"
        src={ProfilePhoto}
        alt="Me"
      />
    </div>
  );
};

export default Profile;
