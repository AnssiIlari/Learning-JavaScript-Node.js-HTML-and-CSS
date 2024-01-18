import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [userid, setUserid] = useState('');


  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(resData => setUsers(resData.data))
      .catch(err => console.error(err))
  }, []);

  const fetchData = () => {
    fetch('https://reqres.in/api/users/' + userid)
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Response status not ok');
      }

      return response.json();
    })
    .then(resData => setUser(resData.data))
    .catch(err => console.error(err))
  };

  const inputChanged = (event) => {
    setUserid(event.target.value);
  }



  return (
    <>
      <table>
        <tbody>
          {
            users.map((user) =>
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
              </tr>
            )
          }
        </tbody>
      </table>

      <input placeholder="User ID" value={userid} onChange={inputChanged} />
      <button onClick={fetchData}>Fetch</button>
      <p>{user.first_name} {user.last_name} {user.email}</p>

    </>
  )
}

export default App
