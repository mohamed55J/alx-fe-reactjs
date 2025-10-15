function MainContent() {
  const mainStyle = {
    backgroundColor: "#f0f8ff",
    padding: "20px",
    textAlign: "center",
    borderRadius: "8px",
    marginTop: "15px"
  };

  const textStyle = {
    fontSize: "18px",
    color: "#333"
  };

  return (
    <main style={mainStyle}>
      <p style={textStyle}>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
}

export default MainContent;
