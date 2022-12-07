import React from 'react';
import './ContactBtn.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const ContactBtn = ({ contactRef, linkToRef }) => {
  return (
    <div className='ContactBtn' onClick={() => linkToRef(contactRef)}>
      <FontAwesomeIcon className='Icon' icon={faAngleDown} />
      <div className='Text'>CONTACT ME!</div>
    </div>
  );
};

export default ContactBtn;
