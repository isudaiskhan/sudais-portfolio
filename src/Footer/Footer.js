import React from 'react'
import { FaLinkedin,FaGithub } from "react-icons/fa";
import logo from '../assets/sudais-logo.png'



const Footer = () => {
  return (
    <>

            <footer className="bg-[#25262A] mt-5 text-white py-5">
              <div className="max-w-[1240px] px-3 mx-auto flex flex-col md:flex-row items-center justify-between">
              <div className="flex justify-center md:justify-end space-x-4">
                
              <a href="#">
                 <img src={logo} href='#' className='w-24 h-[90px]' />
              </a>
             
              </div>
                <div className="text-center md:text-left mb-2 md:mb-0">
                  <p className="text-lg">© 2024 Sudais Khan. All rights reserved.</p>
                </div>
                <div className="flex justify-center md:justify-end space-x-6">
                
                  <a href='https://www.linkedin.com/in/sudais-khan-a660912a2/' target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className='text-4xl text-white hover:text-indigo-500' />
                </a>
                <a href='https://github.com/isudaiskhan' className='pl-4' target="_blank" rel="noopener noreferrer">
                  <FaGithub className='text-4xl text-white hover:text-indigo-500' />
                </a>
              
                </div>
              </div>
            </footer>

    </>
  )
}

export default Footer