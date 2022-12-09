import React from 'react';
import './Section5.scss';
import DevBlog from '../../../images/DevBlog.png';

import { Icon } from '@iconify/react';

const Section5 = () => {
  return (
    <div className='Section5' id='section5'>
      <div className='HeaderBox'>
        <h2>Blogs</h2>
      </div>
      <div className='Content'>
        <a href='https://dev-blog-jib0.onrender.com/' target='_blank'>
          <div className='Card-2'>
            <div className='CardHeader'>
              <h4>Testimonial</h4>
            </div>
            <img src={DevBlog} alt='DevBlog' />

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
            </div>
          </div>
        </a>

        <a href='https://history-blog.onrender.com/' target='_blank'>
          <div className='Card-2'>
            <div className='CardHeader'>
              <h4>Testimonial</h4>
            </div>
            <img src={DevBlog} alt='DevBlog' />

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
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Section5;
