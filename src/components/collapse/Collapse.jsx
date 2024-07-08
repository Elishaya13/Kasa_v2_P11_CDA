import { useEffect, useRef, useState } from 'react';
import './collapse.scss';

/**
 * Component for creating a collapsible content area.
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Title of the collapsible section
 * @param {string} props.arrow - URL of the arrow image
 * @param {string} props.text - Text content to be displayed inside the collapsible section
 * @returns {JSX.Element} The Collapse component
 */
const Collapse = ({ title, arrow, text }) => {
  const [open, setOpen] = useState(false);
  // Ref to access the collapsible content DOM element
  const contentRef = useRef(null);

  // Effect to dynamically adjust the height of the collapsible content for animation purposes
  useEffect(() => {
    if (open) {
      // If open, set max-height to the scrollHeight to expand the content
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      // If closed, remove the max-height style to collapse the content
      contentRef.current.style.maxHeight = null;
    }
  }, [open]);

  // Handler for click events to toggle the open state
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className='collapse'>
      <div className='collapse__container' onClick={handleClick}>
        <h3>{title}</h3>
        <img
          src={arrow}
          alt='fleche'
          className={open ? 'arrow-up' : 'arrow-down'}
        ></img>
      </div>

      <div
        className={`collapse__textContent ${open ? 'open' : ''}`}
        ref={contentRef}
      >
        <div className='collapse__textContent_text'>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
