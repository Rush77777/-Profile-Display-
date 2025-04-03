import React from "react";

const MapComponent = ({ selectedProfile }) => {
  return (
    <div>
      <h2>Map Placeholder</h2>
      {selectedProfile ? <p>Showing location for {selectedProfile.name}</p> : <p>Select a profile to see the map.</p>}
    </div>
  );
};

export default MapComponent;
