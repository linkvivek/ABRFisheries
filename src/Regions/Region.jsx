import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../DataContext';
import AverageData from './AverageData';
import './region.css'

const Region = () => {
  const { region } = useParams();
  const { fisheriesData } = useContext(DataContext);

  const regionKey = region.replace('_', ' ');
  const regionalFish = fisheriesData[regionKey];

  return (
    <>
      <h1>{regionKey}</h1>

      <AverageData
        label="Average calories per serving:"
        amount={regionalFish?.totalCalories}
        total={regionalFish?.fish.length}
      />
      <AverageData
        label="Average fat per serving:"
        amount={regionalFish?.totalFat}
        total={regionalFish?.fish.length}
        unit="g"
      />

      <ul className='image-list'>
        {regionalFish && regionalFish?.fish.map((f) => {
          return (
            <li key={f.SpeciesName}>
              <figure>
                <img
                  src={f.ImageGallery?.[0]?.src}
                  alt={f.ImageGallery?.[0]?.alt ?? 'img'}
                  width={200}
                  height={200}
                />
                <figcaption>
                  <h3>{f.SpeciesName}</h3>
                  <p><strong>Calories: </strong>{f.Calories}</p>
                  <p><strong>Fat: </strong>{f.FatTotal}</p>
                  <div
                    dangerouslySetInnerHTML={{ __html: f.PhysicalDescription }}
                    className='description' />
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