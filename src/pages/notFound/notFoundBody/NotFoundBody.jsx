import { Link } from "react-router-dom";
import "./notFoundBody.scss";
import { STRINGS } from '../../../constants/uiStrings';

const NotFoundBody = () => {
  return (
    <div className='error_container__body'>
      <p className='error_container__body__message_number'>404</p>
      <p className='error_container__body__message_oups'>
        {STRINGS.ERROR_MESSAGE_404}
      </p>
      <p className='error_container__body__message_back'>
        <Link to='/home'>{STRINGS.ERROR_MESSAGE_404_BACK_LINK}</Link>
      </p>
    </div>
  );
};

export default NotFoundBody;