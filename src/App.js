import { useEffect, useState } from 'react';
import './App.css';
import NavBar from'./Navigation/NavBar';

function App() {
  const [regionalData, setRegionalData] = useState({});

  useEffect(() => {
    fetch('http://localhost:5001/gofish?apikey=abrradiology')
    .then(res => res.json())
    .then(data => {
      const groupedByRegion = data.reduce((acc, fishObj) => {
        const key = fishObj.NOAAFisheriesRegion;

        if (!acc[key]) {
              acc[key] = { fish: [], totalFat: 0, totalCalories: 0 };
          }

        acc[key].fish.push(fishObj);
        acc[key].totalFat += parseFloat(fishObj.FatTotal);
        acc[key].totalCalories += parseFloat(fishObj.Calories);
        return acc;
      }, {});

      setRegionalData(groupedByRegion);
    })
  }, []);

  const regions = Object.keys(regionalData);

  return (
    <div className="App">
      <NavBar regions={regions} />
    </div>
  );
}

export default App;
