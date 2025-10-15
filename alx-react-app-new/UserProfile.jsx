function UserProfile(props) {
  const cardStyle = {
    border: "2px solid #0077b6",
    borderRadius: "12px",
    padding: "16px",
    margin: "20px auto",
    width: "300px",
    textAlign: "center",
    backgroundColor: "#caf0f8",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
  };

  const nameStyle = {
    color: "#03045e",
    marginBottom: "8px"
  };

  const infoStyle = {
    color: "#333",
    margin: "4px 0"
  };

  return (
    <div style={cardStyle}>
      <h2 style={nameStyle}>{props.name}</h2>
      <p style={infoStyle}>Age: {props.age}</p>
      <p style={infoStyle}>Location: {props.location}</p>
      <p style={infoStyle}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
