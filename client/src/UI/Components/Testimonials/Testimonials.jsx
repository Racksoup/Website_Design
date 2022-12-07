import React from 'react';
import './testimonials.scss';

import HeaderBG from '../../../images/HeaderBG.png';

const Testimonials = ({ Ref }) => {
  return (
    <div className='Testimonials' ref={Ref}>
      <div className='Title'>TESTIMONIALS</div>
      <div className='Content'>
        <TestComp
          text='fdsfds fdsfds fdsfds sfdsfsd dfdsfds fdsfdsf fdsfds fdsfds'
          name='Amelia'
          img={HeaderBG}
          view='0'
        />
        <TestComp
          text='fdsfds fdsfds fdsfds sfdsfsd dfdsfds fdsfdsf fdsfds fdsfds'
          name='Amelia'
          img={HeaderBG}
          view='1'
        />
        <TestComp
          text='fdsfds fdsfds fdsfds sfdsfsd dfdsfds fdsfdsf fdsfds fdsfdsfdsfds fdsfds fdsfds sfdsfsd dfdsfds fdsfdsf fdsfds fdsfdsfdsfds fdsfds fdsfds sfdsfsd dfdsfds fdsfdsf fdsfds fdsfdsfdsfds fdsfds fdsfds sfdsfsd dfdsfds fdsfdsf fdsfds fdsfdsfdsfds fdsfds fdsfds sfdsfsd dfdsfds fdsfdsf fdsfds fdsfdsfdsfds fdsfds fdsfds sfdsfsd dfdsfds fdsfdsf fdsfds fdsfds'
          name='Amelia'
          img={HeaderBG}
          view='0'
        />
      </div>
    </div>
  );
};

const TestComp = ({ text, name, img, view }) => {
  if (view == 0) {
    return (
      <div className='TestComp'>
        <div className='Text'>{text}</div>
        <div className='ImgContainer'>
          <img className='Img' src={img} />
          <div className='Name'>{name}</div>
        </div>
      </div>
    );
  }

  if (view == 1) {
    return (
      <div className='TestComp'>
        <div className='ImgContainer'>
          <img className='Img' src={img} />
          <div className='Name'>{name}</div>
        </div>
        <div className='Text'>{text}</div>
      </div>
    );
  }
};

export default Testimonials;
