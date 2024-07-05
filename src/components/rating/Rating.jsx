import { useEffect, useState } from "react";
import "./rating.scss";
import { IMAGES } from "../../assets/images/images";

const Rating = ({ rating }) => {
  const [stars, setStars] = useState([]);
  const [maxRate] = useState(5);

  useEffect(() => {
    let tmpArray = [];

    // For each rate until the max rate
    for (let i = 1; i <= maxRate; i++) {
      // We compare with the note received "rating", red image if it is less than or equal to the rating note, otherwise gray image
      let starImg = i <= rating ? IMAGES.RED_STAR_IMG : IMAGES.GREY_STAR_IMG;

      // We push on the stars array the code to write with the good star img
      tmpArray.push(
        <li key={i}>
          <img src={starImg} alt="star icone"></img>
        </li>
      );
    }
    setStars([...tmpArray]);
  }, [rating, maxRate]);

  return (
    <div className="rating">
      <div className="rating__stars">{stars}</div>
    </div>
  );
};
export default Rating;
