import { useState } from 'react'
import './App.css'

function App() {
  const [person, setPerson] = useState({firstname: '', lastname: '', email: '', phone: ''})

  const inputChaned = (event) => {
    setPerson({...person, [event.target.name]: event.target.value})
  }

  const checkFields = () => {
    if (person.firstname === '' || person.lastname === '' || person.email === '' || person.phone === '') {
      alert('All fields are required')
    } else {
      alert(`Welcome ${person.firstname} ${person.lastname}`)
    }
  }

  return (
    <>
    
    <input placeholder='First name' name='firstname' value={person.firstname} onChange={inputChaned}/>
    <br/>
    <input placeholder='Last name' name='lastname' value={person.lastname} onChange={inputChaned}/>
    <br/>
    <input placeholder='Email' name='email' value={person.email} onChange={inputChaned}/>
    <br/>
    <input placeholder='Phone' name='phone' value={person.phone} onChange={inputChaned}/>
    <br/>
    <button onClick={checkFields}>Submit</button>

    </>
  )
}

export default App
