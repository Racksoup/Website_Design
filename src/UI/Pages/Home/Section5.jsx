import React from 'react';
import './Section5.scss';
import Computer from '../../../images/Computer.jpg';
import TaiwanLandscape from '../../../images/TaiwanLandscape.jpg';

import { Icon } from '@iconify/react';

const Section5 = () => {
  return (
    <div className='Section5' id='section5'>
      <div className='HeaderBox'>
        <h2>Blogs</h2>
      </div>
      <div className='Content'>
        <a href='https://www.rackhistory.ca/#/blog/63a242b30a1ea0d32740d12e/' target='_blank'>
          <div className='Card-2'>
            <div className='CardHeader'>
              <h4>History Blog</h4>
            </div>
            <img src={TaiwanLandscape} alt='History Blog' />

            <div className='CardContent'>
              <div className='TimeRow'>
                <Icon icon='ic:baseline-access-time' className='Icon' />
                <p className='Text'>12/19/2023</p>
              </div>
              <h4>TAIWAN HISTORY</h4>
              <p className='Text Desc'>
                Taiwan is an island off the coast of China in the south China sea. It is roughly
                35,000 square kilometers, about the same size as Vancouver island in Canada.
              </p>
            </div>
          </div>
        </a>

        <a href='https://rackdev.ca/#/blog/63a38e70dbfb10af243784a5/' target='_blank'>
          <div className='Card-2'>
            <div className='CardHeader'>
              <h4>Developer Blog</h4>
            </div>
            <img src={Computer} alt='DevBlog' />

            <div className='CardContent'>
              <div className='TimeRow'>
                <Icon icon='ic:baseline-access-time' className='Icon' />
                <p className='Text'>12/20/2023</p>
              </div>
              <h4>So You Want To Be A Programmer?</h4>
              <p className='Text Desc'>
                When you start out programming you have no idea what you are going to be doing. All
                you know is that you want to build apps/programs. You might have an idea to build,
                but you wont know how to build it.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Section5;
