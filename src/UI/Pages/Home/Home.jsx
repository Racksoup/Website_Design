import React from 'react';
import './Home.scss';
import Section0 from './Section0';
import Section1 from './Section1';
import Section2 from './Section2';

const Home = () => {
  return (
    <div className='Home'>
      <Section0 />
      <Section1 />
      <Section2 />
    </div>
  );
};

export default Home;
