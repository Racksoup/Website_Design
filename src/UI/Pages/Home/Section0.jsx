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
                linkToRef('section0');
              }}
            >
              home
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
                linkToRef('section5');
              }}
            >
              blogs
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
            <button className='Button' onClick={() => linkToRef('section6')}>
              <img className='Arrow' src={Arrow} alt='Arrow' />
              <p>get in touch!</p>
            </button>
            {window.innerWidth >= 1200 ? (
              <p className='String Text'>
                Looking for someone to build the website of your dreams! We build Responsive,
                functional, engaging, websites with features such as mailing lists and content
                upload. If you have a website/software idea that needs implementation, we can build
                it! When you purchase a website you get unlimited content updates as well as someone
                who will work with you to create an asset for your business. Our websites help to
                bring in more customer traffic and also keep customers engaged for longer. Client
                satisfaction is our #1 priority.
              </p>
            ) : (
              <div className='TextBox'>
                <p className='Text'>
                  Looking for someone to build the website of your dreams! We build Responsive,
                  funcitonal, engaging, websites with features such as mailing lists and content
                  upload. If you have a website/software idea that needs implementation, we can
                  build it!
                </p>
                {window.innerWidth > 750 && (
                  <p className='Text'>
                    When you purchase a website you get unlimited content updates as well as someone
                    who will work with you to create an asset for your business. Our websites help
                    to bring in more customer traffic and also keep customers engaged for longer.
                    Client satasfaction is our #1 priority.
                  </p>
                )}
              </div>
            )}
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
    </div>
  );
};

export default Section0;
