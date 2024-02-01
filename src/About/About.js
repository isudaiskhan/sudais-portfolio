import React from 'react'
import image from '../assets/myimage.jpg'
import resume from '../assets/Sudais+Web+Developer+Resume.pdf'


const About = () => {
    const handleDownload = () => {
    const resumeUrl = resume;
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'your_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>

<div className='w-full bg-white py-20 px-4' id='about'>
  <div className='max-w-[1140px] mx-auto mt-10 flex md:flex-row flex-col items-center'>
    <img src={image} className='w-96 my-4 md:mr-8' />

    <div className='flex flex-col justify-center md:ms-10'>
      <h1 className='md:text-4xl text-3xl tracking-wide text-[#12141D] font-bold py-4'>About Me</h1>
      <p className='text-[#474747] text-justify'>
      Hi There! I'm Sudais Khan, a passionate frontend React developer with a love for creating engaging and responsive web applications.I specialize in crafting modern, user-friendly interfaces using the latest technologies and best practices in web development. My goal is to bring ideas to life through clean and efficient code. With a strong foundation in React, TailwindCss JavaScript, Bootstrap HTML, and CSS, I enjoy turning complex problems into simple and intuitive solutions. I'm constantly learning and exploring new technologies to stay up-to-date with the ever-evolving world of frontend development.
      Let's work together to create beautiful and functional web experiences. Feel free to explore my portfolio to see some of my recent projects, or get in touch to discuss how we can collaborate on your next venture.
      </p>

    <button
      className="text-lg font-medium bg-[#FECD1A] hover:bg-[#ffdb0f] outline outline-2 outline-[#ffdb0f] text-[#25262af5] mt-10 py-4 px-4 rounded-xl sm:w-1/2 md:w-2/5 lg:w-2/6 xl:w-2/6"
      onClick={handleDownload}>
      Download Resume
    </button>

      </div>

  </div>
</div>
      
    </>
  )
}

export default About
