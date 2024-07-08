import './about.scss';
import Banner from '../../components/banner/Banner';
import Collapse from '../../components/collapse/Collapse';

import { IMAGES } from '../../assets/images/images';
import { ABOUT_TXT } from '../../constants/aboutPageStrings';
import arrow_close from '../../assets/images/arrow_down.svg';

const About = () => {
  return (
    <div className='about'>
      <Banner banner={IMAGES.BANNER_ABOUT} />
      <div className='about__body'>
        <Collapse
          arrow={arrow_close}
          title={ABOUT_TXT.first.title}
          text={ABOUT_TXT.first.text}
        />

        <Collapse
          arrow={arrow_close}
          title={ABOUT_TXT.second.title}
          text={ABOUT_TXT.second.text}
        />

        <Collapse
          arrow={arrow_close}
          title={ABOUT_TXT.third.title}
          text={ABOUT_TXT.third.text}
        />

        <Collapse
          arrow={arrow_close}
          title={ABOUT_TXT.fourth.title}
          text={ABOUT_TXT.fourth.text}
        />
      </div>
    </div>
  );
};

export default About;
