function Button(){
    const handleClick = (name) => console.log(`${name} clicked me!`)
  
    return (<button onClick={() => handleClick("Alex")}>Click Me</button>)
  }
  
  export default Button;