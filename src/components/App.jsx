import { useState } from "react";
import { Modal } from "./Modal/Modal";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && <Modal />}
    </>
  );
}

export default App;
