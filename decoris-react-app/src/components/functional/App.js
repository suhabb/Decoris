import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import useCustomCounter from "../../hooks/Custom";



function App() {

  //1:Use array reference
  const nameStateVar = useState("Su");
  const handleSetNameClick = () => {
    nameStateVar[1]("Suhail Mir")// name of the object hold name [name,function_to_set]
  }

  //2:array destructure
  const [roll, setRoll] = useState(100);
  const handleRollClick = () => {
    setRoll(roll + 2)
  }

  useEffect(() => {
    console.log("User effect called")
  }, [roll]);//call only on `roll` update

  //custom fucntion
  const custom = useCustomCounter();
  const customDec = useCustomCounter();

  return (
    <React.Fragment>
      <p>Name: {nameStateVar[0]}</p>
      <button onClick={handleSetNameClick}>Click Here</button>
      <br />
      <p>Roll:{roll}</p>
      <button onClick={handleRollClick}>Click Roll</button>
      <p>Use custom function</p>
      <p>Custom Counter : {custom.count}</p>
      <button onClick={custom.handleIncrement}>Custom Increment</button>

      <p>Custom Counter Decrement : {customDec.count}</p>
      <button onClick={customDec.handleDecrement}>Custom Decrement</button>

    </React.Fragment>
  );
}

export default App;
