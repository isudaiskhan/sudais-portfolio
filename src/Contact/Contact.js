import React,{useRef} from 'react'
import {FiUser, FiMail, FiMessageSquare,FiPhoneCall} from 'react-icons/fi'
import { FaRegEnvelope  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LuSendHorizonal } from "react-icons/lu";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';




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
  

      return (
        <>


      <div className='w-full pb-36 mt-20 bg-white' id='contact'>
          <h1 className='text-center md:text-4xl text-3xl text-[#12141D] font-semibold '>Contact Me</h1>
          <h1 className='text-center md:text-4xl text-3xl mt-5 font-semibold text-[#12141D]'>Get In Touch With Me</h1>
            <p className='text-center md:w-3/5 mx-auto text-gray-500 py-8'>Thank you for taking the time to visit my website. If you have any questions about my services, or if you would like to schedule a consultation with me, please don't hesitate to reach out to us. I'm here to help and always happy to connect with potential clients.</p>
        <div className='max-w-[1140px] mx-auto flex flex-col sm:flex-col md:flex-row'>



        {/* contact Section */}
        <div className='md:w-1/3 w-11/12 mx-auto my-3 mt-10 '>
        <div className='flex items-center'>
        <a href='#' className='px-3 rounded-full py-3 group'>
          <FiPhoneCall className='text-4xl text-[#12141D] group-hover:text-[#FECD1A]' />
        </a>

        <div className='ml-4'>
          <h1 className='text-[#12141D] font-medium text-2xl'>Call Me</h1>
          <span className='text-gray-700 text-lg'>(+92) 3181934899</span>
        </div>
      </div>




      <div className='flex items-center mt-7'>
        <a href='#' className='px-3 rounded-full py-3 group'>
          <FaRegEnvelope  className='text-4xl text-[#12141D] group-hover:text-[#FECD1A]' />
        </a>

        <div className='ml-4'>
          <h1 className='text-[#12141D] font-medium text-2xl'>Email</h1>
          <span className='text-gray-700 text-lg'>isudaiskhan54 @gmail.com</span>
        </div>
      </div>




      <div className='flex items-center mt-7'>
        <a href='#' className='px-3 rounded-full py-3 group'>
          <FaLocationDot  className='text-4xl text-[#12141D] group-hover:text-[#FECD1A]' />
        </a>

        <div className='ml-4'>
          <h1 className='text-[#12141D] font-medium text-2xl'>Address</h1>
          <span className='text-gray-700 text-lg'>Swat, pakistan</span>
        </div>
      </div>

      </div>


   {/* Form Section */}
    <form ref={form} onSubmit={sendEmail} className='md:w-3/5 w-11/12 max-w-3xl mx-auto pt-10 space-y-5 mb-4 md:mb-0'>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className='md:w-1/2 relative'>
          <input type="text" id="input1" name="user_name" placeholder='Name' required className="w-full border rounded border-gray-500 px-4 py-3 text-black focus:outline-[#FECD1A]" />
          <FiUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <div className='md:w-1/2 relative'>
          <input type="email" id="input2" name="user_Email" placeholder='Email' required className="w-full border rounded border-gray-500 px-4 py-3 text-black focus:outline-[#FECD1A]" />
          <FiMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <div className='w-full relative'>
        <textarea id="textarea" placeholder='Message' name="message" required rows="6" className="p-2 px-4 py-3 w-full border border-gray-500 rounded-md focus:outline-[#FECD1A]" />
        <FiMessageSquare className="absolute right-3 bottom-3 text-gray-500" />
      </div>


    
      

      <div className="flex items-center justify-start">
        <button  type="submit" className="text-lg font-medium flex items-center text-[#25262af5] px-8 py-4 rounded-xl outline outline-2 outline-[#ffdb0f] bg-[#FECD1A] hover:bg-[#ffdb0f]">
          Send To Me
          <LuSendHorizonal className='ml-3 text-xl' />
        </button>
      </div>
    </form>

  
    </div>
  </div>
    </>
  )
}

export default Contact



