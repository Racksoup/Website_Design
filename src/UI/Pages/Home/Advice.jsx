import React from 'react';
import './Advice.scss';

import StraightArrow from '../../../images/StraightArrow.png';

const Advice = () => {
  return (
    <div className='Advice'>
      <div className='Content'>
        <div className='HeaderBox' style={{ width: '29rem' }}>
          <h2>TYPES OF WEBSITES</h2>
        </div>

        <div className='Info'>
          <p className='InfoBox InfoBox-Full'>
            Do you need a website that collects data or can be updated? user accounts, updatable
            menu, updatable schedule, ecommerce?
          </p>
          <div className='ArrowBox'>
            <img
              className='StraightArrow StraightArrow-Left'
              src={StraightArrow}
              alt='Straight Arrow'
            />
            <img
              className='StraightArrow StraightArrow-Right'
              src={StraightArrow}
              alt='Straight Arrow'
            />
          </div>
          <div className='Info-L2'>
            <div className='Info-L3'>
              <div className='InfoBox InfoBox-Full'>
                I need a website that will hold my data / user data
              </div>
              <div className='ArrowBox'>
                <img
                  className='StraightArrow StraightArrow-Left'
                  src={StraightArrow}
                  alt='Straight Arrow'
                />
                <img
                  className='StraightArrow StraightArrow-Right'
                  src={StraightArrow}
                  alt='Straight Arrow'
                />
              </div>
              <div className='Info-L4'>
                <div className='InfoBox InfoBox-Half'>
                  I need an ecommerce site that can be updated frequently, collects user data and
                  handles transactions
                </div>
                <div className='InfoBox InfoBox-Half'>
                  I need a website that doesn't handle transactions but can be updated frequently
                  and can collect data
                </div>
              </div>
            </div>
            <div className='Info-L3'>
              <div className='InfoBox InfoBox-Full'>
                My website displays content but does not need to change ofter after launch
              </div>
              <div className='ArrowBox'>
                <img
                  className='StraightArrow StraightArrow-Left'
                  src={StraightArrow}
                  alt='Straight Arrow'
                />
                <img
                  className='StraightArrow StraightArrow-Right'
                  src={StraightArrow}
                  alt='Straight Arrow'
                />
              </div>
              <div className='Info-L4'>
                <div className='InfoBox InfoBox-Half'>
                  I need some to manage and update my site in the future
                </div>
                <div className='InfoBox InfoBox-Half'>
                  I need a basic website built. after launch you will be given all keys and code.
                  you will be sole owner of the website
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advice;