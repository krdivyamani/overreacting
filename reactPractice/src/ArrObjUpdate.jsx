import { useState } from "react";

function ArrObjUpdate() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function addCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };

    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }
  function removeCar(index) {
    setCars((c) => c.filter((_, idx) => idx !== index));
  }
  function handleYearChange(event) {
    setCarYear((c) => event.target.value); //updater fxn instead of directly updating
  }
  function handleMakeChange(event) {
    setCarMake((c) => event.target.value);
  }
  function handleModelChange(event) {
    setCarModel((c) => event.target.value);
  }

  return (
    <div>
      <h2>List of car objects</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => removeCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input
        type="number"
        value={carYear}
        placeholder="Enter Year"
        onChange={handleYearChange}
      />
      <br />
      <input
        type="text"
        value={carMake}
        placeholder="Enter Car Make"
        onChange={handleMakeChange}
      />
      <br />
      <input
        type="text"
        value={carModel}
        placeholder="Enter Car Model"
        onChange={handleModelChange}
      />
      <br />
      <button onClick={addCar}>Add Car</button>
    </div>
  );
}

export default ArrObjUpdate;
