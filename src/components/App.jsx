import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [clicks, setClicks] = useState(0);

  // Оголошуємо ефект
  useEffect(() => {
    console.log(`${clicks}`);
  });

  return (
    <>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
    </>
  );
}

export default App;
