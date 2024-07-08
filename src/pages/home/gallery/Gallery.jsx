import  { useState, useEffect } from 'react';
import apiAparts from '../../../services/apiAparts'
import Card from '../../../components/card/Card.jsx';
import './gallery.scss'
import Loader from '../../../components/loader/Loader.jsx';

const Gallery = () => {
  const [aparts, setAparts] = useState();
  // const [isData, setIsData] = useState(false);

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
          aparts.map((apart) => <Card key={apart.id} {...apart} />)
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Gallery;