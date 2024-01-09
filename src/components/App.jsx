import "./App.css";

function App() {
  const handleClick1 = () => {
    alert("Hello I'm button");
  };

  const handleClick2 = (evt) => {
    console.log(evt);
  };
  return (
    <>
      <button onClick={handleClick1}>handleClick1</button>
      <button onClick={handleClick2}>handleClick2</button>
    </>
  );
}

export default App;
