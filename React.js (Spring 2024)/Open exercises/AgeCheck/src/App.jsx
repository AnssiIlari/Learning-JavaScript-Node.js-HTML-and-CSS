import { useState } from 'react';
import './App.css'

function App() {

  const [person, setPerson] = useState({ name: '', age: '' });
  
  const inputChange = (event) => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  }

  const checkAge = () => {
    if (person.age < 18) {
      alert('You are too young');
    } else {
      alert(`Hello ${person.name}`);
    }
  };

  return (
    <>
      <input placeholder='Name' name='name' value={person.name} onChange={inputChange} />
      <input placeholder='Age' name='age' value={person.age} onChange={inputChange}/>
      <button onClick={checkAge}>Submit</button>
    </>
  );
}

export default App
