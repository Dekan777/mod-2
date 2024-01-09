import { useState } from "react";
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
