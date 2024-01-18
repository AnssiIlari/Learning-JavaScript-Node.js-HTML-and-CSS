import { useState } from 'react'

import './App.css'

function App() {
  // data from api
  const [data, setData] = useState([]);
  // word to search for
  const [word, setWord] = useState('');
  // loading state
  const [loading, setLoading] = useState(false);
  // show table state
  const [showTable, setShowTable] = useState(false);

  const fetchData = () => {
    setLoading(true);
    setShowTable(true); //  XXXXXXXXXXXXXXXXXXXXX
    fetch('https://api.github.com/search/repositories?q=' + word)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Response status not ok');
        }

        return response.json();
      })
      .then(resData => {
        setData(resData.items);
        setLoading(false);
      })

      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  // input change handler
  const inputChanged = (event) => {
    setWord(event.target.value);
  }


  return (
    <>
      <h2>Repositories</h2>
      <input placeholder="Search" value={word} onChange={inputChanged} />
      <button onClick={fetchData}>Search</button>
      {/* // Show loading text if loading is true */}
      {loading && <p>Loading...</p>}
      {/* // Show table if showTable is true */}
      {showTable && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {
              // Map data to table rows
              data.map((repo) =>
                <tr key={repo.id}>
                  <td>{repo.full_name}</td>
                  <td><a href={repo.html_url}>{repo.html_url}</a></td>
                </tr>
              )
            }
          </tbody>
        </table>
      )}
    </>
  )
}

export default App
