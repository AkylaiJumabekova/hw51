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
        padding: "30px",
        borderRadius: "50%",
        background: "red",
        textAlign: "center",
        color: "white",
        width: "50px",
        height: "50px",
        lineHeight: "50px",
        fontSize: "30px",
      }}
    >
      {number}
    </div>
  );
};
export default RandomNumbers;
