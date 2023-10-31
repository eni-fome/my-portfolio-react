import React, { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


{/* import AnchorLink from "react-anchor-link-smooth-scroll";



const DotGroup = ({ selectedPage, setSelectedPage }) => {
    const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`
    

    return (
        <div className="flex flex-col gap-6 fixed top-[60%] right-7">
            <AnchorLink 
                className={`${selectedPage === "home" ? selectedStyles : "bg-dark-grey"} w-3 h-3  rounded-full`}
                href="#home"
                onClick={() => setSelectedPage("home")}
            />
            <AnchorLink 
                className={`${selectedPage === "skills" ? selectedStyles : "bg-dark-grey"} w-3 h-3  rounded-full`}
                href="#skills"
                onClick={() => setSelectedPage("skills")}
            />
            <AnchorLink 
                className={`${selectedPage === "projects" ? selectedStyles : "bg-dark-grey"} w-3 h-3  rounded-full`}
                href="#projects"
                onClick={() => setSelectedPage("projects")}
            />
            <AnchorLink 
                className={`${selectedPage === "frameworks" ? selectedStyles : "bg-dark-grey"} w-3 h-3  rounded-full`}
                href="#frameworks"
                onClick={() => setSelectedPage("frameworks")}
            />
            <AnchorLink 
                className={`${selectedPage === "contact" ? selectedStyles : "bg-dark-grey"} w-3 h-3  rounded-full`}
                href="#contact"
                onClick={() => setSelectedPage("contact")}
            />
        </div>
    )
};

export default DotGroup; */}



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
