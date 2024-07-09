import './rating.scss';
import { IMAGES } from '../../assets/images/images';

// Define a constant for the maximum rating value
const MAX_RATE = 5;

/**
 * Displays a 5-star rating system.
 *
 * This component visualizes a rating by showing a specific number of red stars (active) based on the `rating` prop, with the rest being grey (inactive).
 *
 * @param {{ rating: number }} props - Contains the rating value.
 * @param {number} props.rating - The rating value from 0 to 5.
 */
const Rating = ({ rating }) => (
  <div className='rating'>
    <div className='rating__stars'>
      {
        // Create an array of MAX_RATE elements, spread it to use map
        [...Array(MAX_RATE)].map((_, index) => (
          // For each element, render a list item
          <li key={index}>
            {/* If the current index is less than or equal to the rating, show RED_STAR_IMG, otherwise show GREY_STAR_IMG */}
            <img
              src={rating <= index ? IMAGES.GREY_STAR_IMG : IMAGES.RED_STAR_IMG}
              alt='star icone'
            />
          </li>
        ))
      }
    </div>
  </div>
);

export default Rating;
