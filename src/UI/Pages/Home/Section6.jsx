import React from 'react';
import './Section6.scss';

import Blotch2 from '../../../images/Blotch1.png';

const Section6 = () => {
  return (
    <div className='Section6' id='section6'>
      <div className='HeaderBox'>
        <h2>Contact</h2>
      </div>
      <div className='Content'>
        <div className='Left'>
          <h4>get in touch</h4>
          <form
            className='Form'
            onSubmit={(e) => {
              e.preventDefault;
            }}
          >
            <input type='text' className='TextLine Text' placeholder='Name' />
            <input type='text' className='TextLine Text' placeholder='E-Mail' />
            <textarea type='text' className='TextBox Text' placeholder='Message' />
          </form>

          <button className='TiltBtn TiltBtn-1 TiltBtn-Purple'>
            <p>Send message</p>
          </button>
        </div>
        <div className='Right'>
          <img src={Blotch2} alt='Blotch' />
          <h3>need to know more details.</h3>
          <h4>get in touch!</h4>

          <div className='TextBox'>
            <p className='Text'>
              Neque convallis a cras semper auctor neque. Vulputate dignissim suspendisse in est
              ante in nibh. Imperdiet nulla malesuada pellentesque elit eget gravida yui sociis.
              Pellentesque habitant{' '}
            </p>
            <p className='Text'>
              Neque convallis a cras semper auctor neque. Vulputate dignissim suspendisse in est
              ante in nibh. Imperdiet nulla malesuada pellentesque elit eget gravida yui sociis.
              Pellentesque habitant{' '}
            </p>
            <p className='Text'>
              Neque convallis a cras semper auctor neque. Vulputate dignissim suspendisse in est
              ante in nibh. Imperdiet nulla malesuada pellentesque elit eget gravida yui sociis.
              Pellentesque habitant{' '}
            </p>
          </div>

          <button className='TiltBtn'>
            <p>Get started</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section6;
