import React from 'react';
import './Section0.scss';

import Internet from '../../../images/Internet.png';
import Arrow from '../../../images/Arrow.png';
import { Icon } from '@iconify/react';

const Section0 = () => {
  return (
    <div className='Section0'>
      <div className='HomeBox'>
        <div className='Header'>
          <div className='NameBox'>
            <h2>CONNOR RACK</h2>
          </div>

          <div className='HeaderNav'>
            <p>home</p>
            <p>services</p>
            <p>portfolio</p>
            <p>about</p>
            <p>contact</p>
          </div>
        </div>
        <div className='TitleBar'>
          <h1>refined website design. built for the exact needs of the individual.</h1>
          <img src={Internet} alt='Internet' />
        </div>

        <div className='Body'>
          <div className='Left'>
            <img className='Arrow' src={Arrow} alt='Arrow' />
            <button className='Button'>
              <p>get in touch!</p>
            </button>
            <p className='String'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className='Right'>
            <div className='Content'>
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
    </div>
  );
};

export default Section0;
