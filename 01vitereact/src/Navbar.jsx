function Navbar() {
  return (
    <div className="w-100 h-12 bg-zinc-800 flex justify-between items-center text-white text-lg">
      <div>
        <span className="text-2xl font-semibold ms-2">React-Vite</span>
      </div>
      <div>
        <ul className="flex gap-8">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
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
