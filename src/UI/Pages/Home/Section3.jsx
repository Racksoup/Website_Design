import React from 'react';
import './Section3.scss';

import { Icon } from '@iconify/react';
import Blotch from '../../../images/Blotch.png';
import BlotchName from '../../../images/BlotchName.png';
import ProfileImage from '../../../images/ProfileImage.png';

const Section3 = () => {
  return (
    <div className='Section3'>
      <div className='HeaderBox'>
        <h2>about</h2>
      </div>

      <div className='Content'>
        <div className='Left'>
          <div className='LeftBox'>
            <div className='BlotchBox'>
              <img src={Blotch} alt='Blotch' className='Blotch' />
            </div>
            <img src={BlotchName} alt='BlotchName' className='BlotchName' />
            <img src={ProfileImage} alt='ProfileImage' className='ProfileImage' />
          </div>
        </div>
        <div className='Right'>
          <div className='RightBox'>
            <div className='Card'>
              <div className='CardHeader'>
                <p>Testimonial</p>
              </div>
              <div className='CardContent'>
                <div className='TimeRow'>
                  <Icon icon='ic:baseline-access-time' className='Icon' />
                  <p className='Text'>05/30/23</p>
                </div>
                <h4>LOREM IPSUM</h4>
                <p className='Text Desc'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore.
                </p>
                <p className='Text Blue'>Read More</p>
              </div>
            </div>
            <div className='Card'>
              <div className='CardHeader CardHeader-1'>
                <p>Testimonial</p>
              </div>
              <div className='CardContent'>
                <div className='TimeRow'>
                  <Icon icon='ic:baseline-access-time' className='Icon' />
                  <p className='Text'>05/30/23</p>
                </div>
                <h4>LOREM IPSUM</h4>
                <p className='Text Desc'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore.
                </p>
                <p className='Text Blue'>Read More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
