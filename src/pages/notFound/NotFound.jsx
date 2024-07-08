import './notFound.scss';
import { STRINGS } from '../../constants/uiStrings';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='error_container'>
      <div className='error_container__body'>
        <p className='error_container__body__message_number'>404</p>
        <p className='error_container__body__message_oups'>
          {STRINGS.ERROR_MESSAGE_404}
        </p>
        <p className='error_container__body__message_back'>
          <Link to='/home'>{STRINGS.ERROR_MESSAGE_404_BACK_LINK}</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
