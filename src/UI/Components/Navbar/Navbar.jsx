import React from 'react';
import './Navbar.scss';

const Navbar = ({ linkToRef }) => {
  return (
    <div className='Navbar'>
      <div className='Content'>
        <div className='Left'>
          <button className='Title'>
            <h4>Website Design</h4>
          </button>

          <div className='Contact'>
            <p>613-869-2343</p>
            <p>Tranquilgorge@outlook.com</p>
          </div>
        </div>

        <div className='Right'>
          <p className='Item' onClick={() => linkToRef('section0')}>
            Home
          </p>
          <p className='Item' onClick={() => linkToRef('section1')}>
            services
          </p>
          <p className='Item' onClick={() => linkToRef('section2')}>
            portfolio
          </p>
          <p className='Item' onClick={() => linkToRef('section3')}>
            about
          </p>
          <p className='Item' onClick={() => linkToRef('section5')}>
            blogs
          </p>
          <p className='Item' onClick={() => linkToRef('section6')}>
            contact
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
