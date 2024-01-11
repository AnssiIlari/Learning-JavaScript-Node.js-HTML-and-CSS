import React from 'react';
import { useState } from 'react';
import './App.css';

// function App(props) {
//   return (
//     <>
//       Hello World {props.firstname} {props.lastname}
//     </>
//   );
// }


function App() {
  const [firstName, setFirstName] = useState('John');
  const [message, setMessage] = useState('Hello')
  const [person, setPerson] = useState({personFirstName: 'Jack', lastName: 'Jackson', age: 27});

  return(
    <div>
       {message} {firstName}
        <br/>
       {message} {person.personFirstName} {person.lastName} {person.age}
     </div>
  )
}

export default App;