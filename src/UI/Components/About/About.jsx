import React from 'react';
import './about.scss';

import HeaderBG from '../../../images/HeaderBG.png';

const About = ({ Ref }) => {
  return (
    <div className='About' ref={Ref}>
      <div className='Title'>ABOUT</div>
      <div className='Contents'>
        <img className='Img' src={HeaderBG} />
        <div className='Text'>
          My name is Connor Rack. I'm passionate about website development. My goal is to build
          excellent professional websites that help my clients provide a better service for their
          customers. In my free time I like to play and develop video-games. Otherwise, I'm usually
          spending time with my dog or my family.
        </div>
      </div>
    </div>
  );
};

export default About;
