import React from 'react';
import './navbar.scss';

const NavBar = ({
  headerRef,
  servicesRef,
  projectsRef,
  testimonialsRef,
  aboutRef,
  blogsRef,
  contactRef,
  linkToRef,
}) => {
  return (
    <div className='NavBar'>
      <div className='Content'>
        <div />
        <div className='Name'>CONNOR RACK</div>
        <div />
        <div className='Links'>
          <div className='RefLink' onClick={() => linkToRef(headerRef)}>
            Home
          </div>
          <div className='RefLink' onClick={() => linkToRef(servicesRef)}>
            Services
          </div>
          <div className='RefLink' onClick={() => linkToRef(projectsRef)}>
            Portfolio
          </div>
          <div className='RefLink' onClick={() => linkToRef(testimonialsRef)}>
            Testimonials
          </div>
          <div className='RefLink' onClick={() => linkToRef(aboutRef)}>
            About
          </div>
          <div className='RefLink' onClick={() => linkToRef(blogsRef)}>
            Blogs
          </div>
          <div className='RefLink' onClick={() => linkToRef(contactRef)}>
            Contact
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default NavBar;
