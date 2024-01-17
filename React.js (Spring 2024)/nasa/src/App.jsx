import './App.css'
import { useState, useEffect } from 'react'


function App() {

  // states
  const [explanation, setExplanation] = useState('');
  const [url, setUrl] = useState('');
  const [mediaType, setMediaType] = useState('');

  // fetch data from api and set states
  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => response.json())
      .then(data => {
        setExplanation(data.explanation);
        setUrl(data.url);
        setMediaType(data.media_type);
      })
      .catch(err => console.log(err))
      // empty array as second argument to do this only once
  }, [])

  // if url is not set, show loading
  if (!url) {
    return <>Loading...</>;
  }
  else if (mediaType === 'image') {
    return (
      <>
        <p>Explanation: {explanation}</p>
        <img alt="Nasa APOD" src={url} />
      </>
    );
  }
  else {
    return (
      <>
        <p>Explanation: {explanation}</p>
        <iframe width="520" height="415" src={url} title="Nasa APOD"></iframe>
      </>
    );
  }
}

export default App;