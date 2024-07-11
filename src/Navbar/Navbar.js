import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import logo from '../assets/sudais-logo.png';
import {motion} from 'framer-motion';



const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'Skills', label: 'Skills' },
    { id: 'Portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  const triggerMobileNavItem = (target) => {
    setMobileMenu(false);

    const targetElement = document.querySelector(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures that effect runs only once after mount

  const initialXRight = windowSize.width >= 640 ? 200 : 100; // Initial X position for right animation

 

  const initialRed = {
    x: initialXRight, // Set initial position for red element
    opacity: 0
  };

  

  return (
    <>
      <div className="relative">
        <div className="w-full z-50 top-0 absolute sm:ps-16 ps-6 sm:pe-16 pe-6">
          <div className="container mx-auto flex items-center justify-between lg:justify-between">
            <div>
              <a href="#">
                <img src={logo} href='#' className='w-32 h-[120px]' />
              </a>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center space-x-3">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`p-6 hover:tracking-widest duration-500 border-transparent relative group cursor-pointer ${
              item.id === 'home' ? 'transform scale-x-100' : ''
            }`}
          >
            <span
              onClick={() => scrollToSection(item.id)}
              className={`text-lg ${
                item.id === 'home' ? 'text-white' : 'text-[#ffffffcc] group-hover:text-white'
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 w-full h-[3px] ${
                  item.id === 'home' ? 'bg-white' : 'bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-left'
                }`}
              ></span>
            </span>
          </li>
        ))}
      </ul>
            </div>

            <div className="block lg:hidden">
              <button onClick={() => setMobileMenu(!mobileMenu)}>
                {mobileMenu ? (
                  <IoMdMenu className="text-3xl text-white" />
                ) : (
                  <IoMdMenu className="text-4xl text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {mobileMenu && (
        <div className="lg:hidden fixed inset-0 z-50 min-h-screen overflow-hidden bg-black bg-opacity-70">
        <motion.div
          initial={initialRed} // Initial position: off-screen to the left, hidden, starting from a greater distance
          whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
          transition={{ 
          delay: 0.2, 
          x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
          opacity: { duration: 1 }, // Smooth opacity transition
          ease: "easeIn", // Easing function
          duration: 1 // Overall animation duration
        }}
           className="absolute right-0 min-h-screen sm:w-3/5 w-full py-4 px-8 shadow md:w-1/3 bg-black z-50">
            <button className="absolute top-0 right-0 mt-4 mr-4" onClick={() => setMobileMenu(false)}>
              <AiOutlineClose className="text-4xl text-white hover:text-gray-300" />
            </button>
            <ul className="mt-12 flex flex-col space-y-7">
              {navItems.map((item) => (
                <MobileNavItem key={item.id} onClick={() => triggerMobileNavItem(`#${item.id}`)}>
                  {item.label}
                </MobileNavItem>
              ))}
            </ul>
          </motion.div>
        </div>
      )}
    </>
  );
};

const MobileNavItem = ({ children, onClick }) => {
  return (
    <li className="py-2">
      <span onClick={onClick} className="cursor-pointer pt-0.5  uppercase text-white">
        {children}
      </span>
    </li>
  );
};

export default Navbar;