import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>mod-2</p>
      <div className="card">
        <button>count</button>
      </div>
    </>
  );
}

export default App;
