import Banner from '../../components/banner/Banner';
import AboutBody from './aboutBody/AboutBody';
import './about.scss'
import { IMAGES} from '../../assets/images/images';


const About = () => {
    return (
        <div className='about'>
            <Banner banner={IMAGES.BANNER_ABOUT} />
            <AboutBody />
        </div>
    );
};

export default About;