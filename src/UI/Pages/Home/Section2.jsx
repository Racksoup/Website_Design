import React from 'react';
import './Section2.scss';

import WebsiteItem from '../../../images/WebsiteItem.png';

const Section2 = () => {
  return (
    <div className='Section2' id='section2'>
      <div className='Content'>
        <div className='HeaderBox'>
          <h2>Portfolio</h2>
        </div>

        <div className='Buttons'>
          <div className='TiltBtn'>
            <p>All</p>
          </div>
          <div className='TiltBtn TiltBtn-1'>
            <p>Resturant</p>
          </div>
          <div className='TiltBtn'>
            <p>law</p>
          </div>
          <div className='TiltBtn TiltBtn-1'>
            <p>ecommerce</p>
          </div>
          <div className='TiltBtn'>
            <p>beauty</p>
          </div>
        </div>

        <div className='Websites'>
          <div className='ImageItem ImageItem-Space'>
            <img src={WebsiteItem} alt='WebsiteItem' />
            <div className='Title'>Panda NFT's</div>
          </div>
          <div className='ImageItem ImageItem-Space'>
            <img src={WebsiteItem} alt='WebsiteItem' />
            <div className='Title'>Panda NFT's</div>
          </div>
          <div className='ImageItem ImageItem-Space'>
            <img src={WebsiteItem} alt='WebsiteItem' />
            <div className='Title'>Panda NFT's</div>
          </div>
          <div className='ImageItem'>
            <img src={WebsiteItem} alt='WebsiteItem' />
            <div className='Title'>Panda NFT's</div>
          </div>
          <div className='ImageItem'>
            <img src={WebsiteItem} alt='WebsiteItem' />
            <div className='Title'>Panda NFT's</div>
          </div>
          <div className='ImageItem'>
            <img src={WebsiteItem} alt='WebsiteItem' />
            <div className='Title'>Panda NFT's</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
