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
        <h3>Websites that fit the needs of your business</h3>
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
                  <p className='Text Desc'>5 Pages</p>
                </div>
                <div className='Line'>
                  <Icon icon='ion:checkmark-sharp' className='Icon' />
                  <p className='Text Desc'>3 Months of Content Updates</p>
                </div>
                <div className='Line'>
                  <Icon icon='ion:checkmark-sharp' className='Icon' />
                  <p className='Text Desc'>Mailing List Setup</p>
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
                  <p className='Text Desc'>10 Pages</p>
                </div>
                <div className='Line'>
                  <Icon icon='ion:checkmark-sharp' className='Icon' />
                  <p className='Text Desc'>Backend for Content Updates</p>
                </div>
                <div className='Line'>
                  <Icon icon='ion:checkmark-sharp' className='Icon' />
                  <p className='Text Desc'>Mailing List Setup</p>
                </div>
                <div className='Line'>
                  <Icon icon='ion:checkmark-sharp' className='Icon' />
                  <p className='Text Desc'>Accounts and User Data</p>
                </div>
                <div className='Line'>
                  <Icon icon='ion:checkmark-sharp' className='Icon' />
                  <p className='Text Desc'>3 Months of Design Updates</p>
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
                  <p className='Text Desc'>Unlimited Pages</p>
                </div>
                <div className='Line'>
                  <Icon icon='ion:checkmark-sharp' className='Icon' />
                  <p className='Text Desc'>Backend for Content Updates</p>
                </div>
                <div className='Line'>
                  <Icon icon='ion:checkmark-sharp' className='Icon' />
                  <p className='Text Desc'>Mailing Managment</p>
                </div>
                <div className='Line'>
                  <Icon icon='ion:checkmark-sharp' className='Icon' />
                  <p className='Text Desc'>Accounts and User Data</p>
                </div>
                <div className='Line'>
                  <Icon icon='ion:checkmark-sharp' className='Icon' />
                  <p className='Text Desc'>Unlimited Design Updates</p>
                </div>
                <div className='Line'>
                  <Icon icon='ion:checkmark-sharp' className='Icon' />
                  <p className='Text Desc'>SEO and Social Media Management</p>
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
