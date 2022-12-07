import React, { useState, useRef, useEffect } from 'react';
import NavBar from './../Components/NavBar/NavBar.jsx';
import Header from './../Components/Header/Header.jsx';
import Services from './../Components/Services/Services.jsx';
import Projects from './../Components/Projects/Projects.jsx';
//import Testimonials from './../Components/Testimonials/Testimonials.jsx';
import About from './../Components/About/About.jsx';
import Blogs from './../Components/Blogs/Blogs.jsx';
import Contact from './../Components/Contact/Contact.jsx';
import ContactBtn from './../Components/ContactBtn/ContactBtn.jsx';

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

  const headerRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const aboutRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  const linkToRef = (ref) => {
    const linkOffset = 100;
    const refPosition = ref.current.getBoundingClientRect().top;
    const offsetPosition = refPosition + window.pageYOffset - linkOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  return (
    <div>
      <NavBar
        headerRef={headerRef}
        servicesRef={servicesRef}
        projectsRef={projectsRef}
        testimonialsRef={testimonialsRef}
        aboutRef={aboutRef}
        blogsRef={blogsRef}
        contactRef={contactRef}
        linkToRef={linkToRef}
      />
      {scrollPos > 500 && scrollPos < 4000 && (
        <ContactBtn contactRef={contactRef} linkToRef={linkToRef} />
      )}
      <Header Ref={headerRef} contactRef={contactRef} linkToRef={linkToRef} />
      <Services Ref={servicesRef} />
      <Projects Ref={projectsRef} />
      {/* <Testimonials Ref={testimonialsRef} /> */}
      <About Ref={aboutRef} />
      <Blogs Ref={blogsRef} />
      <Contact Ref={contactRef} />
    </div>
  );
};

export default Home;
