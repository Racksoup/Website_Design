import React, { useState } from 'react';
import './projects.scss';

import HeaderBG from '../../../images/HeaderBG.png';

const Projects = ({ Ref }) => {
  const [view, setView] = useState('All');

  const data = [
    {
      img: HeaderBG,
      label: 'Pizza Resturant',
      category: 'Resturant',
      link: 'https://stefanos-family-pizzeria.herokuapp.com/',
    },
    {
      img: HeaderBG,
      label: 'Pizza Resturant',
      category: 'Resturant',
      link: 'https://stefanos-family-pizzeria.herokuapp.com/',
    },
    {
      img: HeaderBG,
      label: 'Pizza Resturant',
      category: 'Resturant',
      link: 'https://stefanos-family-pizzeria.herokuapp.com/',
    },
    {
      img: HeaderBG,
      label: 'Pizza Resturant',
      category: 'Resturant',
      link: 'https://stefanos-family-pizzeria.herokuapp.com/',
    },
    {
      img: HeaderBG,
      label: 'Pizza Resturant',
      category: 'Resturant',
      link: 'https://stefanos-family-pizzeria.herokuapp.com/',
    },
    {
      img: HeaderBG,
      label: 'Pizza Resturant',
      category: 'Resturant',
      link: 'https://stefanos-family-pizzeria.herokuapp.com/',
    },
    {
      img: HeaderBG,
      label: 'Pizza Resturant',
      category: 'Law',
      link: 'https://stefanos-family-pizzeria.herokuapp.com/',
    },
    {
      img: HeaderBG,
      label: 'Pizza Resturant',
      category: 'Law',
      link: 'https://stefanos-family-pizzeria.herokuapp.com/',
    },
    {
      img: HeaderBG,
      label: 'Pizza Resturant',
      category: 'Law',
      link: 'https://stefanos-family-pizzeria.herokuapp.com/',
    },
    {
      img: HeaderBG,
      label: 'Pizza Resturant',
      category: 'Ecommerce',
      link: 'https://stefanos-family-pizzeria.herokuapp.com/',
    },
    {
      img: HeaderBG,
      label: 'Pizza Resturant',
      category: 'Ecommerce',
      link: 'https://stefanos-family-pizzeria.herokuapp.com/',
    },
    {
      img: HeaderBG,
      label: 'Pizza Resturant',
      category: 'Ecommerce',
      link: 'https://stefanos-family-pizzeria.herokuapp.com/',
    },
    {
      img: HeaderBG,
      label: 'Pizza Resturant',
      category: 'Ecommerce',
      link: 'https://stefanos-family-pizzeria.herokuapp.com/',
    },
    {
      img: HeaderBG,
      label: 'Pizza Resturant',
      category: 'Ecommerce',
      link: 'https://stefanos-family-pizzeria.herokuapp.com/',
    },
    {
      img: HeaderBG,
      label: 'Pizza Resturant',
      category: 'Ecommerce',
      link: 'https://stefanos-family-pizzeria.herokuapp.com/',
    },
    {
      img: HeaderBG,
      label: 'Pizza Resturant',
      category: 'Beauty & Salon',
      link: 'https://stefanos-family-pizzeria.herokuapp.com/',
    },
  ];

  const View = () => {
    switch (view) {
      case 'All':
        return <View0 data={data} />;
      case 'Resturant':
        return <View1 data={data} category='Resturant' />;
      case 'Law':
        return <View1 data={data} category='Law' />;
      case 'Ecommerce':
        return <View1 data={data} category='Ecommerce' />;
      case 'Beauty & Salon':
        return <View1 data={data} category='Beauty & Salon' />;
    }
  };

  return (
    <div className='Projects' ref={Ref}>
      <div className='Title'>PORTFOLIO</div>
      <div className='Content'>
        <div className='Nav'>
          <div className='Btn' onClick={() => setView('All')}>
            All
          </div>
          <div className='Btn' onClick={() => setView('Resturant')}>
            Resturant
          </div>
          <div className='Btn' onClick={() => setView('Law')}>
            Law
          </div>
          <div className='Btn' onClick={() => setView('Ecommerce')}>
            Ecommerce
          </div>
          <div className='Btn' onClick={() => setView('Beauty & Salon')}>
            Beauty & Salon
          </div>
        </div>
        <View />
      </div>
    </div>
  );
};

const View0 = ({ data }) => {
  return (
    <div className='Websites'>
      {data.map((item) => {
        return (
          <a className='Website' href={item.link} target='_blank' rel='noopener'>
            <img className='Img' src={item.img} />
            <div className='Label'>{item.label}</div>
          </a>
        );
      })}
    </div>
  );
};
const View1 = ({ data, category }) => {
  let categoryData = [];
  data.map((item) => {
    if (item.category == category) {
      categoryData.push(item);
    }
  });

  return (
    <div className='Websites'>
      {categoryData.map((item) => {
        return (
          <a className='Website' href={item.link} target='_blank' rel='noopener'>
            <img className='Img' src={item.img} />
            <div className='Label'>{item.label}</div>
          </a>
        );
      })}
    </div>
  );
};

export default Projects;
