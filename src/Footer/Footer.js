import React from 'react'
import { FaLinkedin,FaGithub } from "react-icons/fa";
import logo from '../assets/logo.png'



const Footer = () => {
  return (
    <>

<footer class="bg-[#25262A] text-white py-8">
              <div class="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between">
              <div class="flex justify-center md:justify-end space-x-4">
                
              <a href="#">
                 <img src={logo} href='#' className='w-24 h-16' />

              </a>
             
              </div>
                <div class="text-center md:text-left mb-2 md:mb-0">
                  <p class="text-lg">© 2024 Sudais Khan. All rights reserved.</p>
                </div>
                <div class="flex justify-center md:justify-end space-x-6">
                
                  <a href='https://www.linkedin.com/in/sudais-khan-a660912a2/'>
                  <FaLinkedin className='text-4xl text-white hover:text-[#FECD1A]' />
                </a>
                <a href='https://github.com/isudaiskhan' className='pl-4'>
                  <FaGithub className='text-4xl text-white hover:text-[#FECD1A]' />
                </a>
              
               
                </div>
              </div>
            </footer>

    </>
  )
}

export default Footer
