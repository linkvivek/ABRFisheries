import { useContext } from 'react';
import { DataContext } from '../DataContext';
import './home.css';

const Home = () => {
  const { fisheriesData } = useContext(DataContext);
  const regions = Object.keys(fisheriesData);

  const getAverageValue = (val, total) => (val/total).toFixed(2);

    return (
      <table>
      <caption>Fisheries Regional Data</caption>
        <thead>
          <th>Region</th>
          <th>Average Fat</th>
          <th>Average Calories</th>
        </thead>
        <tbody>
            {regions.map((region) => {
              const totalFish = fisheriesData[region].fish.length;
                return (
                  <tr>
                    <td>{region}</td>
                    <td>{getAverageValue(fisheriesData[region].totalFat, totalFish) + ' g'}</td>
                    <td>{getAverageValue(fisheriesData[region].totalCalories, totalFish)}</td>
                  </tr>
                )
            })}
        </tbody>
      </table>
    );
};

export default Home;