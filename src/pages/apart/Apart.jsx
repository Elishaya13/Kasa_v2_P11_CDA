import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';

// api
import apiAparts from '../../services/apiAparts';

// Components //
import Collapse from '../../components/collapse/Collapse';
import Loader from '../../components/loader/Loader';
import Rating from '../../components/rating/Rating';
import Slideshow from '../../components/slideshow/Slideshow';
import TagLocation from '../../components/tagLocation/TagLocation';

import './apart.scss';

const Apart = () => {
  const { apartId } = useParams();
  const [apart, setApart] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiAparts
      .getApart(apartId)
      .then((json) => {
        setApart(json);
      })
      .catch((e) => setError(e));
  }, [apartId]);

  // Build the view only if the values have been retrieved and initialized in "apart" state
  if (apart) {
    return (
      <div className='apart'>
        <div className='apart__slideshow'>
          <Slideshow pictures={apart.pictures} alt={apart.description} />
        </div>

        <div className='apart__profil'>
          <div className='apart__profil__name'>
            <div className='apart__profil__name__title'>
              <h2>{apart.title}</h2>
              <p>{apart.location}</p>
            </div>

            <div className='apart__profil__name__tags'>
              {apart.tags.map((item, index) => (
                <TagLocation key={index} tags={item} />
              ))}
            </div>
          </div>

          <div className='apart__profil__host'>
            <Rating rating={apart.rating} />

            <div className='apart__profil__host__hoster'>
              <p>{apart.host['name']} </p>
              <img src={apart.host['picture']} alt={'proprietaire'}></img>
            </div>
          </div>
        </div>

        <div className='apart__collapse'>
          <Collapse title='Description'>
            <p>{apart.description}</p>
          </Collapse>

          <Collapse title='Équipement'>
            {apart.equipments.map((equipement, index) => (
              <li key={index}>{equipement}</li>
            ))}
          </Collapse>
        </div>
      </div>
    );
  }

  if (error) {
    return <Navigate to='/error' />;
  }
  // Call the Loader component while waiting for the data
  return <Loader />;
};

export default Apart;
