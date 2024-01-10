import { useState } from "react";
import "./App.css";

// import { CustomButton } from "./CustomButton/CustomButton";
// import { ClickCounter } from "./ClickCounter/ClickCounter";

function App() {
  // const handleClick1 = () => {
  //   alert("Hello I'm button");
  // };

  // const handleClick2 = (evt) => {
  //   console.log(evt);
  // };

  // const [clicks, setClicks] = useState(0);
  // const handleClick4 = () => {
  //   setClicks(clicks + 1);
  // };

  // const [isOpen, setIsOpen] = useState(false);
  // const handleToggle = () => {
  //   setIsOpen(!isOpen);
  // };

  // const [clicks2, setClicks2] = useState(0);
  // const handleClick = () => {
  //   setClicks2(clicks2 + 1);
  // };

  // const ClickCounter2 = () => {
  //   return <button onClick={handleClick}>CurrentAll: {clicks2}</button>;
  // };

  // const [clicks5, setClicks5] = useState(0);
  // const handleClick5 = () => {
  //   setClicks5(clicks5 + 1);
  // };
  // const ClickCounter5 = ({ value, onUpdate }) => {
  //   return <button onClick={onUpdate}>CurrentAll2: {value}</button>;
  // };
  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });

  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1,
    });
  };

  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1,
    });
  };
  return (
    <>
      {/* <button onClick={handleClick1}>handleClick1</button>
      <button onClick={handleClick2}>handleClick2</button>
      <CustomButton message="Playing music!">Play some music</CustomButton>
      <button onClick={handleClick4}>Current: {clicks}</button>
      <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
      {isOpen && <div>Now you can see me!</div>}
      <ClickCounter />
      <ClickCounter />
      <ClickCounter2 />
      <ClickCounter2 />
      <ClickCounter5 value={clicks5} onUpdate={handleClick5} />
      <ClickCounter5 value={clicks5} onUpdate={handleClick5} /> */}
      <p>
        x: {values.x}, y: {values.y}
      </p>

      <button onClick={updateX}>Update x</button>
      <button onClick={updateY}>Update y</button>
    </>
  );
}

export default App;
