import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const anotherUser = "John Doe";

const ReactElement = React.createElement(
  "a",
  { href: "https://tailwindcss.com" },
  "Hello",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(ReactElement);
