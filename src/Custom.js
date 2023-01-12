import React, { useState } from "react";

const Customhook = (initialvalue = 0) => {
  const [count, setcount] = useState(initialvalue);
  const Increment = () => {
    setcount(count + 1);
  };
  const Decrement = () => {
    setcount(count - 1);
  };
  return { count, Increment, Decrement };
};

export default Customhook;
