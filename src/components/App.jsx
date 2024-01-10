import { useState } from "react";

import "./App.css";
import { CustomButton } from "./CustomButton/CustomButton";
function App() {
  const handleClick1 = () => {
    alert("Hello I'm button");
  };

  const handleClick2 = (evt) => {
    console.log(evt);
  };

  const [clicks, setClicks] = useState(0);
  const handleClick4 = () => {
    setClicks(clicks + 1);
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button onClick={handleClick1}>handleClick1</button>
      <button onClick={handleClick2}>handleClick2</button>
      <CustomButton message="Playing music!">Play some music</CustomButton>
      <button onClick={handleClick4}>Current: {clicks}</button>
      <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
      {isOpen && <div>Now you can see me!</div>}
    </>
  );
}

export default App;
