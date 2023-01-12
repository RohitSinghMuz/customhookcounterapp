import React from "react";
import Customhook from "./Custom";

const Count = () => {
  const { count, Increment, Decrement } = Customhook(10);
  return (
    <div style={{ width: "30%", margin: "10px auto" }}>
      <button
        style={{ padding: "10px 20px", margin: "10px" }}
        onClick={Increment}
      >
        Increment
      </button>

      <h2 style={{ padding: "10px 20px", margin: "10px" }}>
      {count}</h2>

      <button
        style={{ padding: "10px 20px", margin: "10px" }}
        onClick={Decrement}
      >
        Decrement
      </button>
    </div>
  );
};

export default Count;
