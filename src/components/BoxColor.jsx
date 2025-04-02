import React from "react";

const BoxColor = ({ color, inputColor }) => {
  const isMatch = color === inputColor.toLowerCase(); // Verifica si el color coincide con el input

  return (
    <div
      className="box"
      style={{
        backgroundColor: isMatch ? color : "transparent",
        border: `2px solid ${color}`,
      }}
    >
      <p style={{ color: isMatch ? "black" : color }}>
        {isMatch ? `Yes, I'm ${color}` : `I'm not a ${inputColor || "any"} color`}
      </p>
    </div>
  );
};

export default BoxColor;
