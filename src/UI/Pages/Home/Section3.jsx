import React from 'react';
import './Section3.scss';

import { Icon } from '@iconify/react';
import Blotch from '../../../images/Blotch.png';
import BookProfile2 from '../../../images/BookProfile2.png';

const Section3 = ({ linkToRef }) => {
  return (
    <div className='Section3' id='section3'>
      <div className='HeaderBox'>
        <h2>about</h2>
      </div>
      <div className='Content'>
        <div className='Left'>
          <div className='LeftBox'>
            <img src={BookProfile2} alt='BookProfile' className='BookProfile' />
            {window.innerWidth >= 1500 ? (
              <div className='BlotchBox'>
                <img src={Blotch} alt='Blotch' className='Blotch' />
                <div className='TextBox'>
                  <p className='Text'>
                    I am a Canadian Web-Developer, born in Gatineau and I've lived in Ottawa my
                    whole life.
                  </p>
                  <p className='Text'>
                    I have been developing websites and software for 3 years. I went to school for
                    video game development in 2020.
                  </p>
                  <p className='Text'>
                    My passions include history, politics, economics, gaming, dogs, cooking and,
                    literature.
                  </p>
                </div>
              </div>
            ) : (
              <div className='BlotchBox-Medium'>
                <div className='Content'>
                  <div className='Item'>
                    <p className='Text'>
                      I am a Canadian Web-Developer, born in Gatineau and I've lived in Ottawa my
                      whole life.
                    </p>
                  </div>
                  <hr />
                  <div className='Item'>
                    <p className='Text'>
                      I have been developing websites and software for 3 years. In 2020 I went to
                      school for video game development.
                    </p>
                  </div>
                  <hr />
                  <div className='Item'>
                    <p className='Text'>
                      My passions include history, politics, economics, gaming, dogs, cooking and,
                      literature.
                    </p>
                  </div>
                </div>
              </div>
            )}
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
                <p className='Text Blue' onClick={() => linkToRef('section6')}>
                  Read More
                </p>
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
                <p className='Text Blue' onClick={() => linkToRef('section6')}>
                  Read More
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
