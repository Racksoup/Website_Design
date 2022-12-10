import React, { useState } from 'react';
import './Section2.scss';

import PandaNFTsItem from '../../../images/PandaNFTsItem.png';
import FitnessStoreItem from '../../../images/FitnessStoreItem.png';
import PetStoreItem from '../../../images/PetStoreItem.png';
import PizzeriaItem from '../../../images/PizzeriaItem.png';

const data = [
  {
    title: "Panda NFT's",
    category: 'Ecommerce',
    website: 'https://nft-website.onrender.com/',
    github: 'https://github.com/Racksoup/NTF_Site',
    description: 'NFT Exchange Website',
    image: PandaNFTsItem,
  },
  {
    title: "Stefano's Family Pizzeria",
    category: 'Resturant',
    website: 'https://stefanos-family-pizzeria.onrender.com/',
    github: 'https://github.com/Racksoup/StefanosFamilyPizzeria',
    description: 'Pizzeria Business Website',
    image: PizzeriaItem,
  },
  {
    title: 'Fitness Store',
    category: 'Ecommerce',
    website: 'https://fitness-store.onrender.com/',
    github: 'https://github.com/Racksoup/FitnessStore',
    description: 'Fitness and Exercise Equipment Online-Store',
    image: FitnessStoreItem,
  },
  {
    title: 'Pet Store',
    category: 'Ecommerce',
    website: 'https://pet-store.onrender.com/',
    github: 'https://github.com/Racksoup/PetStore',
    description: 'Pet Food, Toys, and Supplies',
    image: PetStoreItem,
  },
];

const Section2 = () => {
  const [tab, setTab] = useState('All');

  return (
    <div className='Section2' id='section2'>
      <div className='Content'>
        <div className='HeaderBox'>
          <h2>Portfolio</h2>
        </div>

        <a href='https://portfolio-nnjz.onrender.com/' target='_blank' className='PortfolioLink'>
          <div className='TiltBtn TiltBtn-1 GreenBG'>
            <p>Full Portfolio</p>
          </div>
        </a>

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

        <Websites data={data} tab={tab} />
      </div>
    </div>
  );
};

const Websites = ({ data, tab }) => {
  let newData = [];
  if (tab !== 'All') {
    data.map((x) => {
      if (x.category == tab) {
        newData.push(x);
      }
    });
  } else {
    newData = data;
  }

  let remainder;
  let lastRowCutOff;
  if (window.innerWidth >= 1258) {
    remainder = newData.length % 3;
    lastRowCutOff = newData.length - remainder;
  }
  if (window.innerWidth < 1258 && window.innerWidth >= 839) {
    remainder = newData.length % 2;
    if (remainder == 1) {
      lastRowCutOff = newData.length - 1;
    } else {
      lastRowCutOff = newData.length - 2;
    }
  }
  if (window.innerWidth < 839) {
    lastRowCutOff = newData.length - 1;
  }

  return (
    <div className='Websites'>
      {newData.map((x, i) => {
        if (i >= lastRowCutOff) {
          return (
            <a href={x.website} target='_blank' key={i}>
              <div className='ImageItem'>
                <img src={x.image} alt='Website' />
                <div className='Title'>{x.title}</div>
              </div>
            </a>
          );
        } else {
          return (
            <a href={x.website} target='_blank' key={i}>
              <div className='ImageItem ImageItem-Space'>
                <img src={x.image} alt='Website' />
                <div className='Title'>{x.title}</div>
              </div>
            </a>
          );
        }
      })}
    </div>
  );
};

export default Section2;
