// Components
import Banner from '../../components/banner/Banner';
import Gallery from './gallery/Gallery';

// Styles
import './home.scss';

// Assets
import { IMAGES } from '../../assets/images/images';
import { STRINGS } from '../../constants/uiStrings';

const Home = () => {
  return (
    <main className='home'>
      <Banner banner={IMAGES.BANNER_HOME} text={STRINGS.BANNER_TITLE} />
      <Gallery />
    </main>
  );
};

export default Home;
