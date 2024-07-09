import './collapse.scss';
import { useState } from 'react';
import { IMAGES } from '../../assets/images/images';

/**
 * Component for creating a collapsible content area.
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Title of the collapsible section
 * @param {React.ReactNode} props.children - Children elements to be displayed inside the collapsible section
 * @returns {JSX.Element} The Collapse component
 */
const Collapse = ({ children, title }) => {
  const [open, setOpen] = useState(false);

  // Handler for click events to toggle the open state
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className='collapse'>
      <div className='collapse__container' onClick={handleClick}>
        <h3>{title}</h3>
        <img
          src={IMAGES.ARROW_CLOSE}
          alt='fleche'
          className={open ? 'arrow-up' : 'arrow-down'}
        ></img>
      </div>

      <div className={`collapse__textContent ${open ? 'open' : ''}`}>
        <div className='collapse__textContent_text'>{children}</div>
      </div>
    </div>
  );
};

export default Collapse;
