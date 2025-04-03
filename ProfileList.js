import React from "react";

const ProfileList = ({ onSelectProfile }) => {
  const profiles = [
    { id: 1, name: "John Doe", photo: "https://via.placeholder.com/100", description: "Software Engineer" },
    { id: 2, name: "Jane Smith", photo: "https://via.placeholder.com/100", description: "Graphic Designer" },
  ];

  return (
    <div>
      {profiles.map((profile) => (
        <div key={profile.id} onClick={() => onSelectProfile(profile)} style={{ cursor: "pointer", padding: "10px", border: "1px solid #ccc", marginBottom: "10px" }}>
          <img src={profile.photo} alt={profile.name} width="50" height="50" />
          <h3>{profile.name}</h3>
          <p>{profile.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
