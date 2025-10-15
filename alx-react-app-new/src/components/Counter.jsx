import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  const counterStyle = {
    border: "2px solid #0077b6",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
    width: "250px",
    margin: "20px auto",
    backgroundColor: "#f0f8ff"
  };

  const buttonStyle = {
    margin: "5px",
    padding: "10px 15px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#0077b6",
    color: "white",
    cursor: "pointer"
  };

  const countStyle = {
    fontSize: "24px",
    color: "#03045e",
    marginBottom: "10px"
  };

  return (
    <div style={counterStyle}>
      <h2 style={{ color: "#0077b6" }}>Counter App</h2>
      <p style={countStyle}>Count: {count}</p>
      <button style={buttonStyle} onClick={handleIncrement}>
        Increment
      </button>
      <button style={buttonStyle} onClick={handleDecrement}>
        Decrement
      </button>
      <button
        style={{ ...buttonStyle, backgroundColor: "#90e0ef", color: "#03045e" }}
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
