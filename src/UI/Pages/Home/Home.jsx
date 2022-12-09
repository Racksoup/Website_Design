import React, { useState, useEffect, useRef } from 'react';
import './Home.scss';
import Section0 from './Section0';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';

const Home = () => {
  const section0Ref = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
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
    const linkOffset = 100;
    const refPosition = ref.current.getBoundingClientRect().top;
    const offsetPosition = refPosition + window.pageYOffset - linkOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  return (
    <div className='Home'>
      <Section0
        ref={section0Ref}
        section0Ref={section0Ref}
        section1Ref={section1Ref}
        section2Ref={section2Ref}
        section3Ref={section3Ref}
        section5Ref={section5Ref}
        section6Ref={section6Ref}
        linkToRef={linkToRef}
      />
      <Section1 ref={section1Ref} />
      <Section2 ref={section2Ref} />
      <Section3 ref={section3Ref} />
      <Section4 />
      <Section5 ref={section5Ref} />
      <Section6 ref={section6Ref} />
      {/* {scrollPos > 500 && scrollPos < 4000 && (
         <ContactBtn contactRef={contactRef} linkToRef={linkToRef} />
       )} */}
    </div>
  );
};

export default Home;

// <NavBar
//   headerRef={headerRef}
//   servicesRef={servicesRef}
//   projectsRef={projectsRef}
//   testimonialsRef={testimonialsRef}
//   aboutRef={aboutRef}
//   blogsRef={blogsRef}
//   contactRef={contactRef}
//   linkToRef={linkToRef}
// />
