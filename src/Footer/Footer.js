import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/sudais-logo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#25262A] mt-5 text-white py-5">
        <div className="max-w-[1240px] px-4 mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#">
              <img src={logo} href="#" className="w-24 h-[90px]" />
            </a>
          </div>
          <div className="text-center md:text-left mb-2 md:mb-0">
            <p className="text-lg">© 2024 Sudais Khan. All rights reserved.</p>
          </div>
          <div className="flex justify-center md:justify-end space-x-5">
            <a
              href="https://www.linkedin.com/in/sudais-khan-a660912a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-11 h-11 rounded-full group"
            >
              <div className="w-full h-full absolute top-0 left-0 bg-indigo-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center border-2 border-indigo-500 rounded-full">
                <FaLinkedin className="text-3xl text-white group-hover:text-indigo-500" />
              </div>
            </a>
            <a
              href="https://github.com/isudaiskhan"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-11 h-11 rounded-full group"
            >
              <div className="w-full h-full absolute top-0 left-0 bg-indigo-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center border-2 border-indigo-500 rounded-full">
                <FaGithub className="text-3xl text-white group-hover:text-indigo-500" />
              </div>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
