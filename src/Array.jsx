import React from "react";
import "./styles/Array.css";
const App = () => {
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Evan",
    "Fiona",
    "George",
    "Hannah",
    "Ian",
    "Julia",
  ];

  let i = Math.floor(Math.random() * 10) + 1;

  return (
    <>
      <main>
        <div className='card'>
          <h1>Hello, {names[i]}.</h1>
        </div>
      </main>
    </>
  );
};

export default App;
