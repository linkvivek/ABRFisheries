import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { DataContext } from '../DataContext';
import './region.css'

const Region = () => {
  const { region } = useParams();
  const { fisheriesData } = useContext(DataContext);

  const regionKey = region.replace('_', ' ');
  const myFish = fisheriesData[regionKey];
  const totalFish = myFish?.fish.length;

  const getAvgValue = (val) => (val/totalFish).toFixed(2);

  return (
    <>
    <h1 style={{ textAlign: 'center'}}>{regionKey}</h1>
    <div className='avgInfo'><h3>Average calories per serving: </h3><span>{getAvgValue(myFish?.totalCalories)}</span></div>
    <div className='avgInfo'><h3>Average fat per serving: </h3><span>{getAvgValue(myFish?.totalFat)}</span></div>
    <ul className='image-list'>
      {myFish && myFish?.fish.map((f) => {
        return (
          <li key={f.SpeciesName} className='card'>
            <figure>
              <img src={f.ImageGallery?.[0]?.src} alt={f.ImageGallery?.[0]?.alt ?? 'img'} width={200} height={200} />
              <figcaption>
                <h3>{f.SpeciesName}</h3>
                <p><strong>Calories:</strong> {f.Calories}</p>
                <p><strong>Fat:</strong> {f.FatTotal}</p>
                <div dangerouslySetInnerHTML={{ __html: f.PhysicalDescription }} className='desc' />
              </figcaption>
            </figure>
          </li>
        );
      })}
    </ul>
    </>
  )
};  

export default Region;