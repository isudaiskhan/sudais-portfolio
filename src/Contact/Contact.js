import React, { useRef, useState, useEffect } from 'react';
import { FiUser, FiMail, FiMessageSquare, FiPhoneCall } from 'react-icons/fi';
import { FaRegEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LuSendHorizonal } from "react-icons/lu";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zef9swc', 'template_3pxwg88', form.current, 't6aNcPeEMRanVVyt3')
      .then((result) => {
        console.log(result.text);
        e.target.reset();

        // Display SweetAlert after form submission
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Thank you for contacting us.",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((error) => {
        console.log(error.text);
      });
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
  }, []);

  const initialXLeft = windowSize.width >= 640 ? -200 : -100;
  const initialXRight = windowSize.width >= 640 ? 200 : 100;

  const initialGreen = {
    x: initialXLeft,
    opacity: 0
  };

  const initialRed = {
    x: initialXRight,
    opacity: 0
  };

  return (
    <>
    <div className='w-full container mx-auto xl:px-5 sm:px-3 px-5 pb-36 mt-20 bg-white overflow-hidden' id='contact'>
      <div className='flex-col flex lg:flex-row'>
        {/* contact Section */}
        <motion.div
          initial={initialGreen}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ 
            delay: 0.2, 
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1 
          }}
          className='lg:w-1/3 lg:mx-auto my-3 mt-10'
        >
          <div className='px-3'>
            <h1 className='md:text-4xl text-3xl font-semibold text-[#12141D]'>Contact info</h1>
            <p className='text-gray-500 mt-5'>For inquiries, feedback, or support, feel free to reach out to us. We're here to assist you!"</p>
          </div>

          <div className='flex items-center mt-12'>
            <a href='#' className='rounded-full p-4 group bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-emerald-500 hover:via-sky-500 hover:to-indigo-500 hover:bg-gradient-to-r hover:from-10% hover:via-30% hover:to-90%'>
              <FiPhoneCall className='text-4xl text-white' />
            </a>
            <div className='ml-4'>
              <h1 className='text-[#12141D] font-medium text-2xl'>Call Me</h1>
              <span className='text-gray-700 text-lg'>(+92) 3181934899</span>
            </div>
          </div>

          <div className='flex items-center mt-9'>
            <a href='#' className='rounded-full p-4 group bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-emerald-500 hover:via-sky-500 hover:to-indigo-500 hover:bg-gradient-to-r hover:from-10% hover:via-30% hover:to-90%'>
              <FaRegEnvelope className='text-4xl text-white' />
            </a>
            <div className='ml-4'>
              <h1 className='text-[#12141D] font-medium text-2xl'>Email</h1>
              <span className='text-gray-700 text-lg'>isudaiskhan54 @gmail.com</span>
            </div>
          </div>

          <div className='flex items-center mt-9'>
            <a href='#' className='rounded-full p-4 group bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-emerald-500 hover:via-sky-500 hover:to-indigo-500 hover:bg-gradient-to-r hover:from-10% hover:via-30% hover:to-90%'>
              <FaLocationDot className='text-4xl text-white' />
            </a>
            <div className='ml-4'>
              <h1 className='text-[#12141D] font-medium text-2xl'>Address</h1>
              <span className='text-gray-700 text-lg'>Swat, Pakistan</span>
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.form
          initial={initialRed}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ 
            delay: 0.2, 
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1 
          }}
          ref={form} onSubmit={sendEmail} className='lg:w-3/5 max-w-3xl md:mt-0 mt-5 mx-auto pt-10 space-y-5 mb-4 md:mb-0'
        >
          <div>
            <h1 className='md:text-4xl text-3xl font-semibold text-[#12141D]'>Get in Touch</h1>
            <p className='text-gray-500 py-5'>Thank you for taking the time to visit my website. If you have any questions about my services, or if you would like to schedule a consultation with me, please don't hesitate to reach out to us. I'm here to help and always happy to connect with potential clients.</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className='md:w-1/2 relative'>
              <input type="text" id="input1" name="user_name" placeholder='Name' required className="w-full border rounded border-gray-500 px-4 py-3 text-black focus:outline-indigo-500" />
              <FiUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <div className='md:w-1/2 relative'>
              <input type="email" id="input2" name="user_Email" placeholder='Email' required className="w-full border rounded border-gray-500 px-4 py-3 text-black focus:outline-indigo-500" />
              <FiMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          <div className='w-full relative'>
            <textarea id="textarea" placeholder='Message' name="message" required rows="6" className="p-2 px-4 py-3 w-full border border-gray-500 rounded-md focus:outline-indigo-500" />
            <FiMessageSquare className="absolute right-3 bottom-3 text-gray-500" />
          </div>

          <div className="flex items-center justify-start">
            <button type="submit" className="text-lg font-medium flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-emerald-500 hover:via-sky-500 hover:to-indigo-500 hover:bg-gradient-to-r hover:from-10% hover:via-30% hover:to-90% text-white shadow-2xl shadow-indigo-500 hover:shadow-none">
              Send To Me
              <LuSendHorizonal className='ml-3 text-xl' />
            </button>
          </div>
        </motion.form>
      </div>
    </div>
    </>
  );
};

export default Contact;