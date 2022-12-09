import React from 'react';
import './Section1.scss';

import { Icon } from '@iconify/react';

const Section1 = ({ linkToRef }) => {
  return (
    <div className='Section1' id='section1'>
      <div className='Content'>
        <div className='HeaderBox'>
          <h2>Services</h2>
        </div>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h3>
        <div className='CardBox'>
          <div className='Card-1'>
            <div className='CardHeader'>
              <h4>Basic</h4>
            </div>
            <div className='CardContent'>
              <h4>$200</h4>
              <div className='TextBox'>
                <div className='Line'>
                  <Icon icon='ion:checkmark-sharp' className='Icon' />
                  <p className='Text Desc'>Lorem ipsum dolor sit amet</p>
                </div>
                <div className='Line'>
                  <Icon icon='ion:checkmark-sharp' className='Icon' />
                  <p className='Text Desc'>consectetur adipiscing elit</p>
                </div>
                <div className='Line'>
                  <Icon icon='ion:checkmark-sharp' className='Icon' />
                  <p className='Text Desc'>incididunt ut labore et dolore</p>
                </div>
              </div>
              <p className='Text Blue' onClick={() => linkToRef('section6')}>
                Read More
              </p>
            </div>
          </div>

          <div className='Card-1'>
            <div className='CardHeader CardHeader-1'>
              <h4>Full</h4>
            </div>
            <div className='CardContent'>
              <h4>$300</h4>
              <div className='TextBox'>
                <div className='Line'>
                  <Icon icon='ion:checkmark-sharp' className='Icon' />
                  <p className='Text Desc'>Lorem ipsum dolor sit amet</p>
                </div>
                <div className='Line'>
                  <Icon icon='ion:checkmark-sharp' className='Icon' />
                  <p className='Text Desc'>consectetur adipiscing elit</p>
                </div>
                <div className='Line'>
                  <Icon icon='ion:checkmark-sharp' className='Icon' />
                  <p className='Text Desc'>incididunt ut labore et dolore</p>
                </div>
                <div className='Line'>
                  <Icon icon='ion:checkmark-sharp' className='Icon' />
                  <p className='Text Desc'>sed do eiusmod tempor</p>
                </div>
                <div className='Line'>
                  <Icon icon='ion:checkmark-sharp' className='Icon' />
                  <p className='Text Desc'>Ut enim ad minim veniam</p>
                </div>
              </div>
              <p className='Text Blue' onClick={() => linkToRef('section6')}>
                Read More
              </p>
            </div>
          </div>

          <div className='Card-1'>
            <div className='CardHeader CardHeader-2'>
              {window.innerWidth <= 1500 ? <h4>Full +</h4> : <h4>Full + maintenance</h4>}
            </div>
            <div className='CardContent'>
              <h4>$300 +</h4>
              <div className='TextBox'>
                <div className='Line'>
                  <Icon icon='ion:checkmark-sharp' className='Icon' />
                  <p className='Text Desc'>Lorem ipsum dolor sit amet</p>
                </div>
                <div className='Line'>
                  <Icon icon='ion:checkmark-sharp' className='Icon' />
                  <p className='Text Desc'>consectetur adipiscing elit</p>
                </div>
                <div className='Line'>
                  <Icon icon='ion:checkmark-sharp' className='Icon' />
                  <p className='Text Desc'>incididunt ut labore et dolore</p>
                </div>
                <div className='Line'>
                  <Icon icon='ion:checkmark-sharp' className='Icon' />
                  <p className='Text Desc'>sed do eiusmod tempor</p>
                </div>
                <div className='Line'>
                  <Icon icon='ion:checkmark-sharp' className='Icon' />
                  <p className='Text Desc'>Ut enim ad minim veniam</p>
                </div>
                <div className='Line'>
                  <Icon icon='ion:checkmark-sharp' className='Icon' />
                  <p className='Text Desc'>quis nostrud exercitation</p>
                </div>
              </div>
              <p className='Text Blue' onClick={() => linkToRef('section6')}>
                Read More
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
