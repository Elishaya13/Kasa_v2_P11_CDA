import { useState } from 'react';
import { IMAGES} from '../../assets/images/images';
import './slideshow.scss'


const Slideshow = ({ pictures }) => {
  const [currentIndex, setIndex] = useState(0);

  // A get the last index
  const lastIndex = pictures.length - 1;

  /**
   * Handles the action of clicking the "previous" button in a slideshow.
   *
   * This function checks if the current slide is the first slide in the slideshow.
   * If it is the first slide, the function sets the index to show the last slide.
   * Otherwise, it decrements the index to move to the previous slide.
   */
  const handleClickSlideLeft = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? lastIndex : currentIndex - 1;
    setIndex(newIndex);
  };

  /**
   * Handles the action of clicking the "next" button in a slideshow.
   *
   * This function checks if the current slide is the last slide in the slideshow.
   * If it is the last slide, the function resets the index to show the first slide.
   * Otherwise, it increments the index to move to the next slide.
   */
  const handleClickSlideRight = () => {
    const isLastSlide = currentIndex === lastIndex;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setIndex(newIndex);
  };

  return (
    <div
      className='slideshow'
      style={{ backgroundImage: `url("${pictures[currentIndex]}")` }}
    >
      <div className='slideshow__arrows'>
        {pictures.length > 1 && (
          <img
            className='arrow_back'
            src={IMAGES.ARROW_BACK}
            alt='flèche de défilement'
            onClick={handleClickSlideLeft}
          ></img>
        )}
        {pictures.length > 1 && (
          <img
            className='arrow_forward'
            src={IMAGES.ARROW_FORWARD}
            alt='flèche de défilement'
            onClick={handleClickSlideRight}
          ></img>
        )}
      </div>

      {pictures.length > 1 && (
        <span>
          {currentIndex + 1}/{pictures.length}
        </span>
      )}
    </div>
  );
};

export default Slideshow;