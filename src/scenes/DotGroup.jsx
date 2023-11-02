import React, { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const [activeDot, setActiveDot] = useState(selectedPage);

  const handleScroll = () => {
    // Determine the active section based on scroll position
    const scrollPosition = window.scrollY;
    let activeSection = 'home'; // Default to 'home' section
    const sectionIds = ['home', 'skills', 'projects', 'frameworks', 'contact'];

    sectionIds.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          activeSection = sectionId;
        }
      }
    });

    // Update the active dot and selectedPage prop
    setActiveDot(activeSection);
    setSelectedPage(activeSection);
  };

  useEffect(() => {
    // Initialize activeSection with the selectedPage prop
    setActiveDot(selectedPage);

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up the scroll event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, [selectedPage]); // Add selectedPage as a dependency

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      {['home', 'skills', 'projects', 'frameworks', 'contact'].map((sectionId) => (
        <AnchorLink
          key={sectionId}
          className={`${
            activeDot === sectionId ? 'bg-yellow' : 'bg-dark-grey'
          } w-3 h-3 rounded-full`}
          href={`#${sectionId}`}
          onClick={() => setSelectedPage(sectionId)}
        />
      ))}
    </div>
  );
};




export default DotGroup;
