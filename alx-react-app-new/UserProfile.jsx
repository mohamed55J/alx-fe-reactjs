import React from "react";

function UserProfile() {
  const user = {
    name: "John Doe",
    age: 28,
    bio: "Traveler, photographer, and React developer.",
  };

  return (
    <div
      style={{
        border: "2px solid gray",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontWeight: "bold",
          color: "navy",
          marginBottom: "10px",
        }}
      >
        {user.name}
      </h2>
      <p style={{ fontSize: "16px", margin: "5px 0" }}>Age: {user.age}</p>
      <p style={{ fontStyle: "italic", margin: "5px 0" }}>{user.bio}</p>
    </div>
  );
}

export default UserProfile;
