import React from 'react';
import './Navbar.scss';
import Panda from '../../../images/Panda.png';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='Content'>
        <div className='Left'>
          <button className='Title'>
            <img src={Panda} alt='Panda' />
            <h4>Panda NFT's</h4>
          </button>
          <Link className='Link' to='/Categories'>
            <p className='Item'>Categories</p>
          </Link>
          <p className='Item'>Merch</p>
          <p className='Item Item-End'>Popular</p>
        </div>

        <div className='Right'>
          <button className='Sign-up'>Sign-up</button>
          <button className='Sign-in'>Sign-in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
