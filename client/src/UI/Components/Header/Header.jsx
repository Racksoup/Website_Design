import React from 'react';
import './header.scss';

const Header = ({ Ref, contactRef, linkToRef }) => {
  return (
    <div>
      <div className='Header-Spacing' />
      <div className='Header' ref={Ref}>
        <div className='Content'>
          <div className='Text'>HI,</div>
          <div className='Text'>I'M CONNOR RACK</div>
          <div className='Text'>WEB DEVELOPER</div>
          <div className='Btn' onClick={() => linkToRef(contactRef)}>
            CONTACT ME!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
