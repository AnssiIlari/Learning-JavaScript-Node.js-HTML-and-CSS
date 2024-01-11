import './App.css'
import { useState } from 'react';

function App(props) {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('Black');


  return (
    <>

      {/* This is a ternary operator. It's a shorthand for if/else statements. */}
    {count <= 10 
        ? <p>You have pressed the button {count} times</p> 
        : <p>You have pressed the button more than 10 times</p>
      }

    {/* <button onClick={() => setCount(count + 1)}>Press me</button> */}

    {/* This is a better way to update the count state using the functional form of setState */}
    {/* <button onClick={() => setCount(prevCount => prevCount + 1)}>Press me</button> */}
    
    <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    <button onClick={() => count > 0 && setCount(prevCount => prevCount - 1)}>-</button>
    <button onClick={() => setCount(0)}>Reset</button>


<br />
<br />

{/* conditional rendering */}

{props.message.length >= 10 
        ? <p>Too long</p> 
        : <div>{props.message}</div>
      }


<br />
<br />

<div style={{color}}>This is a sentence</div>
<button onClick={() => setColor("Red")}>Change Color</button>

    </>
  )
}


export default App
