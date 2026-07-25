import React from "react";
import { useState, useEffect } from "react";
const mottoParts = [
  "Empower Your Body",
  "Elevate Your Health",
  "Enhance Your Mind",
];

const Moto = () => {
  const [currentPartIndex, setCurrentPartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartIndex((prevIndex) => (prevIndex + 1) % mottoParts.length);
    }, 4000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="moto-container">
      {mottoParts.map((part, index) => (
        <strong
          key={index}
          className={`moto-line ${index === currentPartIndex ? "visible" : ""}`}
        >
          {part}
        </strong>
      ))}
    </span>
  );
};

export default Moto;
