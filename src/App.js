import { useEffect, useState, useContext } from 'react';
import './App.css';
import NavBar from'./Navigation/NavBar';
import { DataContext } from './DataContext';

function App() {
  const { fisheriesData, setFisheriesData } = useContext(DataContext);

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
        if (!!fishObj.FatTotal) acc[key].totalFat += parseFloat(fishObj.FatTotal);
        if (!!fishObj.Calories) acc[key].totalCalories += parseFloat(fishObj.Calories);
        return acc;
      }, {});

      setFisheriesData(groupedByRegion);
    })
  }, []);

  const regions = Object.keys(fisheriesData);

  return (
    <div className="App">
      <NavBar regions={regions} />
    </div>
  );
}

export default App;
