import { useContext } from "react";
import UserContext from "../UserContext";

function UserProfile() {
  const user = useContext(UserContext);

  const profileStyle = {
    border: "1px solid gray",
    padding: "10px",
    margin: "10px",
    borderRadius: "8px",
    backgroundColor: "#f0f8ff",
    width: "300px"
  };

  const nameStyle = {
    color: "blue",
    fontSize: "20px",
    marginBottom: "8px"
  };

  const infoStyle = {
    margin: "4px 0",
    color: "#333"
  };

  return (
    <div style={profileStyle}>
      <h2 style={nameStyle}>{user.name}</h2>
      <p style={infoStyle}>
        Age: <span style={{ fontWeight: "bold" }}>{user.age}</span>
      </p>
      <p style={infoStyle}>Location: {user.location}</p>
      <p style={infoStyle}>Bio: {user.bio}</p>
    </div>
  );
}

export default UserProfile;
