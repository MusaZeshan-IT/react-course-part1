function Navbar() {
  const fisrtLinkName = "Home";
  const secondLinkName = "Services";
  const thirdLinkName = "About";
  const fourthLinkName = "Contact";

  // Everything in curly braces {} in the return function is just an expression
  // which means that it can just be the final value to be returned.
  // We write javascript in it but just the variable that holds its value not
  // anything else.

  return (
    <div className="w-100 h-12 bg-zinc-800 flex justify-between items-center text-white text-lg">
      <div>
        <span className="text-2xl font-semibold ms-2">React-Vite</span>
      </div>
      <div>
        <ul className="flex gap-8">
          <li>{fisrtLinkName}</li>
          <li>{secondLinkName}</li>
          <li>{thirdLinkName}</li>
          <li>{fourthLinkName}</li>
        </ul>
      </div>
      <div>
        <button className="bg-black rounded-md px-4 py-[6px] me-4">
          Login
        </button>
        <button className="bg-gray-600 rounded-md px-4 py-[6px]">Signup</button>
      </div>
    </div>
  );
}

export default Navbar;
