import React from 'react';
import './header.scss';
import HeaderBG from '../../../images/HeaderBG.png';

const Header = ({ Ref, contactRef, linkToRef }) => {
  return (
    <div>
      <div className='Header' ref={Ref}>
        <img src={HeaderBG} alt='background' className='background' />
        <div className='Content'>
          <div className='Text Text-Small'>My name is</div>
          <div className='Text Text-Big'>CONNOR RACK</div>
          <div className='Text Text-Small'>and I am a</div>
          <div className='Text Text-Big'>WEB DEVELOPER</div>
        </div>
        <div className='Btn' onClick={() => linkToRef(contactRef)}>
          CONTACT ME!
        </div>
      </div>
    </div>
  );
};

export default Header;
