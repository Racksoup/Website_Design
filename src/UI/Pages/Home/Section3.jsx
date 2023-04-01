import React from 'react';
import './Section3.scss';

import { Icon } from '@iconify/react';
import Blotch from '../../../images/Blotch.png';
import BookProfile2 from '../../../images/BookProfile2.png';
import Book2 from '../../../images/Book2.png';

const Section3 = ({ linkToRef }) => {
  return (
    <div className='Section3' id='section3'>
      <div className='HeaderBox'>
        <h2>about</h2>
      </div>
      <div className='Content'>
        <div className='Left'>
          <div className='Left-Content'>
            <div className='Book'>
              <div className='Img-Parent'>
                <img src={Book2} alt='Book' />
              </div>

              <div className='TextBox'>
                <p className='Text'>
                  I am a Canadian Web-Developer, born in Gatineau and I've lived in Ottawa my whole
                  life.
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
                  <p className='Text'>02/21/23</p>
                </div>
                <h4>Adam Chorney</h4>
                <p className='Text Desc'>
                  I was really impressed with the attention to detail that Connor showed throughout
                  the development process. He took the time to really understand my brand and my
                  goals for the website, and it shows in every aspect of the site.
                </p>
                <p className='Text Blue' onClick={() => linkToRef('section6')}></p>
              </div>
            </div>
            <div className='Card'>
              <div className='CardHeader CardHeader-1'>
                <p>Testimonial</p>
              </div>
              <div className='CardContent'>
                <div className='TimeRow'>
                  <Icon icon='ic:baseline-access-time' className='Icon' />
                  <p className='Text'>03/10/23</p>
                </div>
                <h4>Brigette Clavell</h4>
                <p className='Text Desc'>
                  I just received my new website from Connor and I have to say, I am absolutely
                  thrilled with the results! From start to finish, the process was smooth and easy,
                  and the end result exceeded all of my expectations.
                </p>
                <p className='Text Blue' onClick={() => linkToRef('section6')}></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
