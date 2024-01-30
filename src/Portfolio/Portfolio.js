import React from 'react';
import image1 from '../assets/portfolio1.png';
import image2 from '../assets/portfolio2.png';
import image3 from '../assets/portfolio3.png';
import image4 from '../assets/portfolio4.png';



const Portfolio = () => {
  const portfolioItems = [
    {
      thumbnailUrl: image1,
    },
    {
      thumbnailUrl: image2,
    },
    {
      thumbnailUrl: image3,
    },
    {
      thumbnailUrl: image4,
    },
  ];

  return (
    <>
      <section id="Portfolio" className="bg-gray-100 py-12 sm:py-20 mt-12 sm:mt-36">
        <div className="container mx-auto max-w-7xl">
          <h2 className="sm:text-5xl text-3xl text-[#12141D] font-semibold text-center mb-4">
            Check Out My Portfolio
          </h2>
          <h2 className="text-2xl text-gray-800 text-center mt-5 font-semibold mb-4">
            Some Of My Latest Projects
          </h2>
          <div className="grid grid-cols-1 mt-8 sm:mt-16 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="p-3 rounded-md cursor-pointer"
              >
                <img
                  src={item.thumbnailUrl}
                  alt={`Project ${index + 1}`}
                  className="mb-4 w-full max-h-80 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;