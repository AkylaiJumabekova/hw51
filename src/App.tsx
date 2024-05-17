import React, { useState } from "react";
import RandomNumbers from "./components/RandomNumbers/RandomNumbers";

const App: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

  const generateNumber = (): number[] => {
    const numbers: number[] = [];
    while (numbers.length < 5) {
      const newNumber = Math.floor(Math.random() * 32) + 5;
      if (!numbers.includes(newNumber)) {
        numbers.push(newNumber);
      }
    }
    return numbers.sort((a, b) => a - b);
  };

  const handleNewNumbers = () => {
    setNumbers(generateNumber());
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "50px",
        height: "100vh",
        backgroundColor: "aliceblue",
      }}
    >
      <h1 style={{ color: "red", fontSize: "40px" }}>
        Random Number Generator
      </h1>
      <div style={{ display: "flex", gap: "40px" }}>
        {numbers.map((number, index) => (
          <RandomNumbers key={index} number={number} />
        ))}
      </div>
      <button
        onClick={handleNewNumbers}
        style={{
          padding: "20px 30px",
          borderRadius: "10px",
          width: "400px",
          border: "1px solid white",
          backgroundColor: "green",
          color: "white",
          fontSize: "30px",
        }}
      >
        New numbers
      </button>
    </div>
  );
};

export default App;
