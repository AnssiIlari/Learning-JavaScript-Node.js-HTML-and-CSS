import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [person, setPerson] = useState({ firstname: '', lastname: '', email: '' });

  // for the first input
  const inputChanged = (event) => {
    setName(event.target.value);
  }

  // for the second input
  const inputChanged2 = (event) => {
    setPerson({...person, [event.target.name]: event.target.value});
  }


  // shows an alert with the name
  const showAlert = () => {
    alert(`Hello ${person.firstname} ${person.lastname}`);
  }

  // for the form
  const formSubmitted = (event) => {
    event.preventDefault();
    // Do something with you data
  }


  

  return (
    <>
    <p>{name}</p>
    <input value={name} onChange={inputChanged} />

    <form onSubmit={formSubmitted}>
    <p>Name: {person.firstname} {person.lastname} Email: {person.email}</p>
    <input placeholder="First name" name="firstname" value={person.firstname} onChange={inputChanged2} />
    <input placeholder="Last name" name="lastname" value={person.lastname} onChange={inputChanged2} />
    <input placeholder="Email" name="email" value={person.email} onChange={inputChanged2} />

    <button onClick={showAlert}>Submit</button>
    </form>

    </>
  )
}

export default App
