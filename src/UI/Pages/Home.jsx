import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className='Home'>
      <div className='HomeBox'>
        <div className='Header'>
          <div className='NameBox'>
            <h2>CONNOR RACK</h2>
          </div>

          <div className='HeaderNav'>
            <p>home</p>
            <p>services</p>
            <p>portfolio</p>
            <p>about</p>
            <p>contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
