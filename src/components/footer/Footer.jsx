import './footer.scss';
import { IMAGES } from '../../assets/images/images';
import { STRINGS } from '../../constants/uiStrings';

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={IMAGES.BLACK_LOGO} alt='footer logo'></img>
      <p>{STRINGS.COPYRIGHT}</p>
    </footer>
  );
};

export default Footer;
