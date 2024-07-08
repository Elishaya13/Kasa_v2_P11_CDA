import Collapse from '../../../components/collapse/Collapse';
import './aboutBody.scss'
import arrow_close from '../../../assets/images/arrow_down.svg'
import { ABOUT_TXT } from '../../../constants/aboutPageStrings';


const AboutBody = () => {

    return (
        <div className='aboutBody'>
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
    );
};

export default AboutBody;