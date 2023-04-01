import React from 'react';
import './Section0.scss';

import Internet from '../../../images/Internet.png';
import Arrow from '../../../images/Arrow.png';
import { Icon } from '@iconify/react';

const Section0 = ({ linkToRef }) => {
  return (
    <div className='Section0' id='section0'>
      <div className='HomeBox'>
        <div className='Header'>
          <div className='Left'>
            <div className='NameBox'>
              <h2>CONNOR RACK</h2>
            </div>
            <div className='Contact'>
              <p>613-869-2343</p>
              <p>Tranquilgorge@outlook.com</p>
            </div>
          </div>

          <div className='HeaderNav'>
            <p
              onClick={() => {
                linkToRef('advice');
              }}
            >
              guide
            </p>
            <p
              onClick={() => {
                linkToRef('section1');
              }}
            >
              services
            </p>
            <p
              onClick={() => {
                linkToRef('section2');
              }}
            >
              portfolio
            </p>
            <p
              onClick={() => {
                linkToRef('section3');
              }}
            >
              about
            </p>
            <p
              onClick={() => {
                linkToRef('section6');
              }}
            >
              contact
            </p>
          </div>
        </div>
        <div className='TitleBar'>
          <h1>refined website design. built for the exact needs of the individual.</h1>
          <img src={Internet} alt='Internet' />
        </div>

        <div className='Body'>
          <div className='Left'>
            {window.innerWidth >= 600 && (
              <div className='ArrowBox'>
                <img className='Arrow' src={Arrow} alt='Arrow' />
                <button className='Button' onClick={() => linkToRef('section6')}>
                  <p>get in touch!</p>
                </button>
              </div>
            )}
            {window.innerWidth < 600 && (
              <button className='Button' onClick={() => linkToRef('section6')}>
                <p>get in touch!</p>
              </button>
            )}
            <div className='TextBox'>
              <p className='Text'>
                I build increadible website experiences! I deliver websites that are responsive,
                functional, and engaging! If you have a website or software idea we can discuss the
                best way to create it!
              </p>
              {window.innerWidth > 750 && (
                <p className='Text'>
                  Packages come with unlimited content updates. I am someone who will work with you
                  to create an asset for your business. My goal is to bring in more customer traffic
                  and keep customers engaged for longer. Your satisfaction is my #1 priority.
                </p>
              )}
            </div>
          </div>
          <div className='Rightx'>
            <div className='Content'>
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
                    I was really impressed with the attention to detail that Connor showed
                    throughout the development process. He took the time to really understand my
                    brand and my goals for the website, and it shows in every aspect of the site.
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
                    I just received my new website from my web developer and I have to say, I am
                    absolutely thrilled with the results! From start to finish, the process was
                    smooth and easy, and the end result exceeded all of my expectations.
                  </p>
                  <p className='Text Blue' onClick={() => linkToRef('section6')}></p>
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
