import React, { useState } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <div>
        <h1 className="text-5xl font-bold text-center my-5">Redux Toolkit</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
