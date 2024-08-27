//React hook = Special function that allows functional components to use React features 
//without writing class components (React v16.8)
//(useState, useffect, useContext, useReducer, useCallback, and more...

import {useState} from "react"

function MyComponent(){
  const [name, setName] = useState("Guest")
  const [age, setAge] = useState(0)
  const [isStudent, setIsStudent] = useState(false)
  
  const incrementAge = () => {
    setAge(age + 1)
  }
  const decrementAge = () => {
    setAge(age - 1)
  }
  const updateName = () => {
    setName("Alex")
  }
  const toggleStudent = () => {
    setIsStudent(!isStudent)
  }

  return (
    <div>
      <p>Name : {name}</p>
      <button onClick={updateName}>Update Name</button>
      <p>Increment Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <button onClick={decrementAge}>Decrement Age</button>
      <p>Student : {isStudent ? "Yes" : "No"}</p>
      <button onClick={toggleStudent}>Toggle Student</button>
      
    </div>
  )
}

export default MyComponent;