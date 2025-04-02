import React, { useState } from "react";
import BoxColor from "./BoxColor";

const colors = ["red", "green", "pink", "yellow", "purple", "white", "blue", "aqua", "olive"];

const MyFormChallenge = () => {
  const [inputColor, setInputColor] = useState("");

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Choose a color"
        value={inputColor}
        onChange={(e) => setInputColor(e.target.value)}
      />
      <div className="grid">
        {colors.map((color) => (
          <BoxColor key={color} color={color} inputColor={inputColor} />
        ))}
      </div>
    </div>
  );
};

export default MyFormChallenge;