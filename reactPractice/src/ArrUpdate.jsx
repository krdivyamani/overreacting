import { useState } from "react";

function ArrUpdate() {
  const [foods, setFoods] = useState(["Apple", "Orange"]);

  function addFood() {
    const food = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods((f) => [...f, food]);
  }

  function removeFood(index) {
    setFoods(foods.filter((food, idx) => idx !== index));
  }

  return (
    <div>
      <h2>List of Foods</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => removeFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={addFood}>Add Food</button>
    </div>
  );
}

export default ArrUpdate;
