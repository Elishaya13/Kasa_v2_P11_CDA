import { useState, useEffect } from 'react';

import apiAparts from '../../../services/apiAparts';

import Card from '../../../components/card/Card';
import Loader from '../../../components/loader/Loader';

import './gallery.scss';

const Gallery = () => {
  const [aparts, setAparts] = useState();
  useEffect(() => {
    if (aparts === undefined) {
      apiAparts.getAparts().then((json) => {
        setAparts(json);
      });
    }
  }, [aparts]);

  return (
    <div className='gallery'>
      <div className='gallery__content'>
        {aparts ? (
          aparts.map((apart) => (
            <Card key={apart.id} {...apart} path='logements' />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Gallery;
