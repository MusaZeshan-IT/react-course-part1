import { useState } from "react";
import "./App.css";

function App() {
  // Array A having used destructuring is the same as Array B:
  // which has set names of the values located at the indexes of the array
  // It is done without destructuring which takes more effort.
  const numbers1 = [1, 2, 3];
  const [a, b] = numbers1;
  // console.log(a);
  // console.log(b);

  // Array B:
  const numbers2 = [3, 4, 5];
  const c = numbers2[0];
  const d = numbers2[1];
  // console.log(c);
  // console.log(d);

  // The function below is somewhat similar to the react function useState
  // to understand how react works
  function customUseState(initialValue) {
    let state = initialValue; // Initializing the state with the provided initial value
    function setState(newValue) {
      state = newValue; // Updating the state with the new user assigned value
    }
    return [state, setState];
  }

  let [num1, newNum] = customUseState(12);
  // console.log(num1);

  let [counter, setCounter] = useState(15);

  function increaseValue() {
    counter++;
    setCounter(counter);
  }

  function decreaseValue() {
    if (counter === 0) {
      return;
    } else {
      counter--;
    }
    console.log(counter);
    setCounter(counter);
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={increaseValue}>Increase Value</button>
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  );
}

export default App;
