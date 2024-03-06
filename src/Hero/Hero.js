import React from 'react'
import image from '../assets/myimage.jpg'
import bgvideo from '../assets/Hero.mp4'



const scrollToContact = () => {
  // Scroll to the contact section
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};



const Hero = () => {
  return (
    <>


<div className="relative w-full overflow-hidden flex flex-col items-center justify-end">
  <video
    autoPlay
    muted
    loop
    className="w-full h-full object-cover absolute inset-0"
  >
    <source src={bgvideo} type="video/mp4" />

  </video>



<div className='relative w-full bg-blend-multiply bg-[#0000007a] pt-40 py-16 px-4' id='home'>
  <div className='max-w-[1140px] mx-auto flex flex-col md:flex-row'>
    {/* First Div */}
    <div className='md:w-2/3 md:mt-8'>
      <h1 className='md:text-6xl text-white text-5xl font-bold tracking-wide py-2' style={{lineHeight:'5.5rem'}}>Hello!<br></br> I'm Sudais Khan.</h1>
      <h1 className='md:text-4xl text-white mt-1 text-3xl tracking-wide py-2'>Front-end React Developer.</h1>

      <button onClick={scrollToContact} className="bg-gradient-to-r shadow-2xl shadow-[#FFAF29] hover:shadow-none text-lg font-medium tracking-wider from-[#FECD1A] to-[#FFAF29] text-[#25262af5] mt-10 py-4 px-4 rounded-xl sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-3/12">
        Contact Me
      </button>
    </div>

   
    {/* Image Div */}
    <div>
    <img src={image} className='sm:w-[400px] w-80 rounded-full  md:ms-auto my-4 md:ml-auto' />
    </div>
  </div>
</div>
</div>
      
    </>
  )
}

export default Hero