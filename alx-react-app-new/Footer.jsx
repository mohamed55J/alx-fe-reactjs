import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "navy",
        color: "white",
        textAlign: "center",
        padding: "10px",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <p>&copy; 2025 My React App | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
