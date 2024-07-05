import { useState } from 'react';
import { IMAGES} from '../../assets/images/images';
import './slideshow.scss'


const Slideshow = ({ pictures }) => {

    const [currentIndex, setIndex] = useState(0)

    // A get the last index 
    const lastIndex = pictures.length - 1;

    const handleClickSlideLeft = () => {

        // If I'm at index 0 , then isFirstSlide = true , I'm on the first slide
        const isFirstSlide = currentIndex === 0;

        // If I am at the first slide, then I go to the last image of my array, otherwise I go back 1
        const newIndex = isFirstSlide ? lastIndex : currentIndex - 1;
        setIndex(newIndex)

    }
    const handleClickSlideRight = () => {

        const isLastSlide = currentIndex === lastIndex;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setIndex(newIndex);
    }

    return (
        <div className='slideshow' style={{ backgroundImage: `url("${pictures[currentIndex]}")` }}>

            <div className='slideshow__arrows'>
                {pictures.length > 1 && <img className='arrow_back' src={IMAGES.ARROW_BACK} alt="flèche de défilement" onClick={handleClickSlideLeft}></img>}
                {pictures.length > 1 && <img className='arrow_forward' src={IMAGES.ARROW_FORWARD} alt="flèche de défilement" onClick={handleClickSlideRight}></img>}
            </div>

            {pictures.length > 1 && <span>{currentIndex + 1}/{pictures.length}</span>}
        </div>
    );
};

export default Slideshow;