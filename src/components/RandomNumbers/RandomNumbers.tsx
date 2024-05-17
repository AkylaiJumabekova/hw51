import React from "react";

interface IRandomNumbers {
  number: number;
}

const RandomNumbers: React.FC<IRandomNumbers> = ({ number }) => {
  return (
    <div
      style={{
        display: "inline-block",
        margin: "10px",
        padding: "10px",
        borderRadius: "50%",
        background: "#f0f0f0",
        textAlign: "center",
        width: "50px",
        height: "50px",
        lineHeight: "50px",
      }}
    >
      {number}
    </div>
  );
};
export default RandomNumbers;
