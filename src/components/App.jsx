import { useState, useEffect } from 'react';
// import { Modal } from "./Modal/Modal";

import './App.css';

const App = () => {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem('saved-clicks');
    if (savedClicks !== null) {
      return parseInt(savedClicks, 10); // Преобразование строки в число
    }
    return 0;
  });

  useEffect(() => {
    window.localStorage.setItem('saved-clicks', clicks);
  }, [clicks]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>You clicked {clicks} times</button>
      <button onClick={() => setClicks(0)}>Reset</button>
    </div>
  );
};

export default App;
