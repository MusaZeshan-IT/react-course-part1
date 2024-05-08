import React, { useState } from "react";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  const nikeShoes1 = {
    name: "Nike Air Max Dn",
    description:
      "The Air Max Dn features our Dynamic Air unit system of dual-pressure tubes, creating a reactive sensation with every step.",
    path: "../src/assets/nike-air-max-dn.jpg",
  };

  const nikeShoes2 = {
    name: "Nike InfinityRN 4",
    description:
      "Nike shoes feature ReactX foam for comfort and a snug collar for stability, ensuring smooth transitions, reducing fatigue.",
    path: "../src/assets/nike-infinityrn-4.jpg",
  };

  const nikeShoes3 = {
    name: "Nike Pegasus 39",
    description:
      "Let the Nike Pegasus 39, a balanced and energized ride for any run, help you ascend to new heights.",
    path: "../src/assets/nike-pegasus-39.jpg",
  };

  return (
    <>
      <div className="ms-5">
        <h1 className="text-5xl font-bold mb-10 mt-3 text-center">
          Tailwind CSS and Props
        </h1>
        <div className="grid grid-cols-3">
          <Card shoe={nikeShoes1}/>
          <Card shoe={nikeShoes2}/>
          <Card shoe={nikeShoes3}/>
        </div>
      </div>
    </>
  );
}

export default App;
