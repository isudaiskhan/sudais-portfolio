import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import logo from '../assets/logo.png';


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

  return (
    <>
      <div className="relative">
        <div className="w-full z-50 top-0 absolute sm:ps-16 ps-6 sm:pe-16 pe-6">
          <div className="container py-5 mx-auto flex items-center justify-between lg:justify-between">
            <div>
              <a href="#">
                <img src={logo} href='#' className='w-28 h-20' />
              </a>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center space-x-3">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`p-6 border-transparent relative group cursor-pointer ${
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
        <div className="lg:hidden fixed inset-0 z-50 min-h-screen bg-black bg-opacity-70">
          <div className="absolute right-0 min-h-screen w-3/5 py-4 px-8 shadow md:w-1/3 bg-black z-50">
            <button className="absolute top-0 right-0 mt-4 mr-4" onClick={() => setMobileMenu(false)}>
              <AiOutlineClose className="text-4xl text-white hover:text-gray-300" />
            </button>
            <ul className="mt-8 flex flex-col space-y-7">
              {navItems.map((item) => (
                <MobileNavItem key={item.id} onClick={() => triggerMobileNavItem(`#${item.id}`)}>
                  {item.label}
                </MobileNavItem>
              ))}
            </ul>
          </div>
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
