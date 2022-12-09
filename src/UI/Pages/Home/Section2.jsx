import React, { useState } from 'react';
import './Section2.scss';

import WebsiteItem from '../../../images/WebsiteItem.png';

const Section2 = () => {
  const [tab, setTab] = useState('All');

  return (
    <div className='Section2' id='section2'>
      <div className='Content'>
        <div className='HeaderBox'>
          <h2>Portfolio</h2>
        </div>

        <div className='Buttons'>
          {tab == 'All' ? (
            <button className='TiltBtn TiltBtn-Purple'>
              <p>All</p>
            </button>
          ) : (
            <button
              className='TiltBtn'
              onClick={() => {
                setTab('All');
              }}
            >
              <p>All</p>
            </button>
          )}
          {tab == 'Resturant' ? (
            <button className='TiltBtn TiltBtn-1 TiltBtn-Purple'>
              <p>Resturant</p>
            </button>
          ) : (
            <button
              className='TiltBtn TiltBtn-1'
              onClick={() => {
                setTab('Resturant');
              }}
            >
              <p>Resturant</p>
            </button>
          )}
          {tab == 'Law' ? (
            <button className='TiltBtn TiltBtn-Purple'>
              <p>Law</p>
            </button>
          ) : (
            <button
              className='TiltBtn'
              onClick={() => {
                setTab('Law');
              }}
            >
              <p>Law</p>
            </button>
          )}
          {tab == 'Ecommerce' ? (
            <button className='TiltBtn TiltBtn-1 TiltBtn-Purple'>
              <p>Ecommerce</p>
            </button>
          ) : (
            <button
              className='TiltBtn TiltBtn-1'
              onClick={() => {
                setTab('Ecommerce');
              }}
            >
              <p>Ecommerce</p>
            </button>
          )}
          {tab == 'Beauty' ? (
            <button className='TiltBtn TiltBtn-Purple'>
              <p>Beauty</p>
            </button>
          ) : (
            <button
              className='TiltBtn'
              onClick={() => {
                setTab('Beauty');
              }}
            >
              <p>Beauty</p>
            </button>
          )}
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
