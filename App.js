import React, { useState } from "react";
import ProfileList from "./components/ProfileList";
import ProfileDetails from "./components/ProfileDetails";
import MapComponent from "./components/MapComponent";
import AdminPanel from "./components/AdminPanel";
import "./styles.css";

const App = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <div className="container">
      <h1>User Profiles</h1>
      <div className="profile-list">
        <ProfileList onSelectProfile={setSelectedProfile} />
      </div>
      {selectedProfile && (
        <div className="profile-details">
          <ProfileDetails profile={selectedProfile} />
        </div>
      )}
      <div className="map-container">
        <MapComponent selectedProfile={selectedProfile} />
      </div>
      <div className="admin-panel">
        <AdminPanel />
      </div>
    </div>
  );
};

export default App;


