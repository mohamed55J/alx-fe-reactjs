function Header() {
  const headerStyle = {
    backgroundColor: "#0077b6",
    color: "white",
    padding: "15px",
    textAlign: "center",
    borderRadius: "8px"
  };

  return (
    <header style={headerStyle}>
      <h1>My Favorite Cities</h1>
    </header>
  );
}

export default Header;
