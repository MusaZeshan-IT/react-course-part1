import React, { useState, useCallback, useEffect, useRef } from "react";

function App() {
  // Setting the states and their default values
  const [length, setLength] = useState(20);
  const [numAllowed, setNumAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  let [password, setPassword] = useState("");

  // Defining variables to store the characters, numbers and symbols.
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_+={}[]|;':,.";


  // The function below toggles the state of the 'numAllowed' and 'symbolAllowed' states.
  function toggleState(prev) {
    return !prev;
  }

  // Now I will be using the useEffect hook to generate the password every time there is a change in the states.
  // Like when the length changes, the numAllowed changes or the symbolAllowed changes.
  // So the length, numAllowed and symbolAllowed states are the dependencies of the useEffect hook.
  useEffect(() => {
    generatePassword();
  }, [length, numAllowed, symbolAllowed])

  // Using the useRef hook to provide a reference to the generated password.
  const passwordRef = useRef(null)

  // Making a function to copy the generated password to the clipboard.
  function copyPassword() {
    passwordRef.current?.select();
    passwordRef.current.setSelectionRange(0, 6);
    window.navigator.clipboard.writeText(password);
  }

  // This function generates a new password with 'useCallback()'
  // Well it isn't useful, when generating the password using a button because each time the button is clicked
  // it would recreate the function whether you use the useCallback or not, so technically it's useless in this case.
  // But it's useful in other cases.
  // Now it's 'useful for me' as I am not using a button to generate the password.
  const generatePassword = useCallback(
    function () {
      console.log("Generating Password...");
      let newPassword = "";
      if (numAllowed) {
        characters += numbers;
      }
      if (symbolAllowed) {
        characters += symbols;
      }
      while (newPassword.length < length) {
        newPassword +=
          characters[Math.floor(Math.random() * characters.length)];
      }
      setPassword(newPassword);
    },
    [length, numAllowed, symbolAllowed, setPassword]
  );

  // This function generates a new password without any optimizations.
  // But firstly I was using a button to generate the password but then I realized that
  // the function would be recreated every time the button is clicked. So I opted to use a simple
  // function instead of a useCallback.

  // function generatePassword() {
  //   console.log("Generating Password...");
  //   let newPassword = "";
  //   if (numAllowed) {
  //     characters += numbers;
  //   }
  //   if (symbolAllowed) {
  //     characters += symbols;
  //   }
  //   while (newPassword.length < length) {
  //     newPassword += characters[Math.floor(Math.random() * characters.length)];
  //   }
  //   setPassword(newPassword);
  // }

  return (
    <>
      <div className="h-screen bg-slate-950">
        <div className="mx-auto relative top-32 w-[45%] bg-slate-700 h-auto rounded-xl">
          <div className="px-7 pb-7 pt-5">
            <h1 className="text-white text-4xl font-semibold text-center">
              Password Generator
            </h1>
            <div className="mt-8">
              <div className="flex">
                <input
                  className="w-11/12 rounded-s-lg py-2 font-semibold text-xl px-6"
                  type="text"
                  name=""
                  id="password"
                  value={password}
                  readOnly
                  ref={passwordRef}
                />
                <button onClick={copyPassword} className="w-1/12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-e-lg">
                  <i class="fa-regular fa-copy fa-lg"></i>
                </button>
              </div>
              <div className="mt-5">
                <input
                  className="cursor-pointer"
                  type="range"
                  min={6}
                  max={40}
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  id="selectLength"
                />
                <label
                  htmlFor="selectLength"
                  className="text-blue-200 font-semibold text-xl ms-4"
                >
                  Length: {length}
                </label>
                <input
                  className="ms-8"
                  type="checkbox"
                  name=""
                  id="numberInput"
                  onChange={function () { setNumAllowed(toggleState) }}
                />
                <label
                  htmlFor="numberInput"
                  className="text-blue-200 font-semibold text-xl ms-1"
                >
                  Numbers
                </label>
                <input
                  className="ms-8"
                  type="checkbox"
                  name=""
                  id="symbolInput"
                  onChange={function () { setSymbolAllowed(toggleState) }}
                />
                <label
                  htmlFor="symbolInput"
                  className="text-blue-200 font-semibold text-xl ms-1"
                >
                  Symbols
                </label>
                <div className="flex justify-center mt-8">
                  <button
                    onClick={generatePassword}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xl"
                    type="button"
                  >
                    Generate
                    <i className="fa-solid fa-bolt-lightning fa-xs ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
