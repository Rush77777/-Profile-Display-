import React from "react";

const ProfileDetails = ({ profile }) => {
  if (!profile) return <p>No profile selected</p>;

  return (
    <div>
      <h2>{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} width="100" height="100" />
      <p>{profile.description}</p>
    </div>
  );
};

export default ProfileDetails;
