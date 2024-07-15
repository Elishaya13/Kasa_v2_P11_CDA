import { Link } from 'react-router-dom';
import './card.scss';

const Card = ({ id, cover, title, path }) => {
  return (
    <Link className='card' to={`/${path}/${id}`}>
      <img src={cover} alt={'Photo of ' + title} />
      <h2 className='card__title'>{title}</h2>
    </Link>
  );
};

export default Card;
