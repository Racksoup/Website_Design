import React, { useState, useEffect, useRef } from 'react';
import './Home.scss';
import Section0 from './Section0';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Navbar from '../../Components/Navbar/Navbar.jsx';

const Home = () => {
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    const pos = window.pageYOffset;
    setScrollPos(pos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const linkToRef = (ref) => {
    const linkOffset = 0;
    const refPosition = document.getElementById(ref).getBoundingClientRect().top;
    const offsetPosition = refPosition + window.pageYOffset - linkOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  return (
    <div className='Home'>
      <Section0 linkToRef={linkToRef} />
      <Section1 id='section1' />
      <Section2 id='section2' />
      <Section3 id='section3' />
      <Section4 id='section4' />
      <Section5 id='section5' />
      <Section6 id='section6' />
      {/* {scrollPos > 500 && scrollPos < 4000 && (
         <ContactBtn contactRef={contactRef} linkToRef={linkToRef} />
       )} */}
      {scrollPos > 1080 && <Navbar linkToRef={linkToRef} />}
    </div>
  );
};

export default Home;
