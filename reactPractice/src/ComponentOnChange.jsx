//onChange = event handler used primarily with form elements
//ex. ‹input›, ‹ textarea›, ‹select>, ‹radio>
//Triggers a function every time the value of the input changes

import {useState} from "react";

function ComponentOnChange(){
  const [name, setName] = useState("guest");
  const [quantity, setQuantity] = useState();
  const [comment, setComment] = useState();

  function handleNameChange(event){
    setName(event.target.value);
  }

  function handleQuantityChange(event){
    setQuantity(event.target.value);
  }

  function handleCommentChange(event){
    setComment(event.target.value);
  }
  
  return(
        <div>
          <input value={name} onChange={handleNameChange}/>
          <p>Name: {name}</p>
          <input value={quantity} onChange={handleQuantityChange} type="number" />
          <p>Quantity: {quantity}</p>
          <textarea value={comment} onChange={handleCommentChange} placeholder="Delivery Instructions" />
          <p>Instructions: {comment}</p>
        </div>
  )
}

export default ComponentOnChange;