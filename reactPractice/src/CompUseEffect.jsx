import { useState, useEffect } from "react";

function CompUseEffect() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count, color]);

  function addCount() {
    setCount((c) => c + 1);
  }
  function subtractCount() {
    setCount((c) => c - 1);
  }
  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  return (
    <div>
      <p style={{ color: color }}>Count : {count}</p>
      <br />
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <br />
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default CompUseEffect;
