import { useEffect, useContext, useState } from 'react';
import './App.css';
import NavBar from'./Navigation/NavBar';
import { DataContext } from './DataContext';
import { mapToRegions } from './utils';

function App() {
  const [error, setError] = useState(false);
  const { setFisheriesData } = useContext(DataContext);

  useEffect(() => {
    fetch('http://localhost:5001/gofish?apikey=abrradiology')
    .then(res => res.json())
    .then(data => {
      const groupedByRegion = mapToRegions(data);
      setFisheriesData(groupedByRegion);
      console.log('groupedByRegion===', groupedByRegion);
    })
    .catch(() => {
      setError(true);
    })
  }, []);

  return (
    <div className="App">
      {error ?
        <div style={{ color: 'red' }}>Something went wrong!</div> :
        <NavBar />
      }
    </div>
  );
}

export default App;
