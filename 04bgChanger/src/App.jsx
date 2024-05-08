import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("bg-black");
  const containerClasses = "h-screen w-screen flex items-center justify-center";
  const containerWithBg = `${containerClasses} ${color}`;

  function changeBgColor(colorName) {
    setColor(colorName);
  }

  return (
    <>
      <div className={containerWithBg}>
        <div className="w-[80%] h-[80%] flex flex-col justify-end">
          <h1 className="mx-auto text-4xl text-white mb-14 font-bold">
            Background Changer
          </h1>
          <div className="bg-gray-100 px-5 py-2 rounded-lg flex justify-evenly mb-10">
            <button
              onClick={function () {
                changeBgColor("bg-red-700");
              }}
              className="btn bg-red-600 text-white hover:bg-red-700 mx-2"
            >
              Red
            </button>
            <button
              onClick={function () {
                changeBgColor("bg-gray-700");
              }}
              className="btn bg-gray-600 text-white hover:bg-gray-700 mx-2"
            >
              Gray
            </button>
            <button
              onClick={function () {
                changeBgColor("bg-green-700");
              }}
              className="btn bg-green-600 text-white hover:bg-green-700 mx-2"
            >
              Green
            </button>
            <button
              onClick={function () {
                changeBgColor("bg-blue-700");
              }}
              className="btn bg-blue-600 text-white hover:bg-blue-700 mx-2"
            >
              Blue
            </button>
            <button
              onClick={function () {
                changeBgColor("bg-black");
              }}
              className="btn bg-zinc-900 text-white hover:bg-black mx-2"
            >
              Black
            </button>
            <button
              onClick={function () {
                changeBgColor("bg-pink-700");
              }}
              className="btn bg-pink-600 text-white hover:bg-pink-700 mx-2"
            >
              Pink
            </button>
            <button
              onClick={function () {
                changeBgColor("bg-yellow-500");
              }}
              className="btn bg-yellow-500 text-white hover:bg-yellow-600 mx-2"
            >
              Yellow
            </button>
            <button
              onClick={function () {
                changeBgColor("bg-purple-700");
              }}
              className="btn bg-purple-600 text-white hover:bg-purple-700 mx-2"
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
