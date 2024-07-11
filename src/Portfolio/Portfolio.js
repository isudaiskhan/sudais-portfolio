import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import image1 from '../assets/portfolio-1.png';
import image2 from '../assets/portfolio-2.png';
import image3 from '../assets/portfolio-3.png';
import image4 from '../assets/portfolio-4.png';
import image5 from '../assets/portfolio-5.png';
import image6 from '../assets/portfolio-6.png';
import image7 from '../assets/portfolio-7.png';
import image8 from '../assets/portfolio-8.png';
import image9 from '../assets/portfolio-9.png';

import image10 from '../assets/To-do-app.png';
import image11 from '../assets/weather-app.png';
import image12 from '../assets/game1.png';
import image13 from '../assets/Breakout-Game4.png';
import image14 from '../assets/bulb.png';
import image15 from '../assets/game2.png';


const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('category1'); // Default category

  const portfolioItems = [
    { thumbnailUrl: image1, largeImageUrl: image1, websiteUrl: 'https://gardening-website.netlify.app/', category: 'category1' },
    { thumbnailUrl: image2, largeImageUrl: image2, websiteUrl: 'https://nike-shoes-website.netlify.app/', category: 'category1' },
    { thumbnailUrl: image3, largeImageUrl: image3, websiteUrl: 'https://haircut-website.netlify.app/', category: 'category1' },
    { thumbnailUrl: image4, largeImageUrl: image4, websiteUrl: 'https://restoran-fast-foods-website.netlify.app/', category: 'category1' },
    { thumbnailUrl: image5, largeImageUrl: image5, websiteUrl: 'https://rent-zoom-website.netlify.app/', category: 'category1' },
    { thumbnailUrl: image6, largeImageUrl: image6, websiteUrl: 'https://fruits-vegetables.netlify.app/', category: 'category1' },
    { thumbnailUrl: image7, largeImageUrl: image7, websiteUrl: 'https://videograph-website.netlify.app/', category: 'category1' },
    { thumbnailUrl: image8, largeImageUrl: image8, websiteUrl: 'https://green-host-website.netlify.app/', category: 'category1' },
    { thumbnailUrl: image9, largeImageUrl: image9, websiteUrl: 'https://seo-master-website.netlify.app/', category: 'category1' },
    
    { thumbnailUrl: image10, largeImageUrl: image10, websiteUrl: 'https://best-to-do-app.netlify.app/', category: 'category2' },
    { thumbnailUrl: image11, largeImageUrl: image11, websiteUrl: 'https://wonderful-weather-app-project.netlify.app/', category: 'category2' },
    { thumbnailUrl: image12, largeImageUrl: image12, websiteUrl: 'https://customizable-tic-tac-toe-game.netlify.app/', category: 'category2' },
    { thumbnailUrl: image13, largeImageUrl: image13, websiteUrl: 'https://best-breakout-game.netlify.app/', category: 'category2' },
    { thumbnailUrl: image14, largeImageUrl: image14, websiteUrl: 'https://bulb-project.netlify.app/', category: 'category2' },
    { thumbnailUrl: image15, largeImageUrl: image15, websiteUrl: 'https://stunning-tic-tac-toe-game.netlify.app/', category: 'category2' },
  ];

  const openModal = (largeImageUrl) => {
    setSelectedImage(largeImageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setIsModalOpen(false);
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = selectedCategory
    ? portfolioItems.filter((item) => item.category === selectedCategory)
    : portfolioItems;

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

  const initialXLeft = windowSize.width >= 640 ? -200 : -100; // Initial X position for left animation

  const initialGreen = {
    x: initialXLeft, // Set initial position for green element
    opacity: 0,
  };

  return (
    <>
    <section id="Portfolio" className="bg-gray-100 mt-12 sm:mt-36 overflow-hidden">
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          y: { type: 'spring', stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: 'easeIn',
          duration: 1,
        }}
        className="container xl:px-5 sm:px-3 px-5 py-12 sm:py-20 mx-auto"
      >
        <h2 className="sm:text-5xl text-4xl text-[#12141D] font-semibold text-center mb-4">
          Check Out My Portfolio
        </h2>
        <h2 className="sm:text-2xl text-xl text-gray-800 text-center mt-5 font-semibold mb-4">
          Some Of My Latest Projects
        </h2>
        <motion.div
          initial={initialGreen}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: 'spring', stiffness: 60 },
            opacity: { duration: 1 },
            ease: 'easeIn',
            duration: 1,
          }}
          className="flex md:justify-end justify-center lg:mt-0 mt-10 mb-10 flex-wrap overflow-hidden"
        >
          <button
            onClick={() => handleFilter('category1')}
            className={`${
              selectedCategory === 'category1'
                ? 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-emerald-500 hover:via-sky-500 hover:to-indigo-500 hover:bg-gradient-to-r hover:from-10% hover:via-30% hover:to-90% text-white'
                : 'bg-white border border-emerald-500 text-black'
            } sm:px-8 sm:py-3 px-6 py-2.5 rounded-s-md`}
          >
            Websites
          </button>
          <button
            onClick={() => handleFilter('category2')}
            className={`${
              selectedCategory === 'category2'
                ? 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-emerald-500 hover:via-sky-500 hover:to-indigo-500 hover:bg-gradient-to-r hover:from-10% hover:via-30% hover:to-90% text-white'
                : 'text-black bg-white border border-emerald-500'
            } sm:px-4 sm:py-3 px-3 py-2.5 rounded-e-md`}
          >
            Other Projects
          </button>
        </motion.div>
        <div className="grid grid-cols-1 mt-8 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 gap-9 overflow-hidden">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="relative rounded-md cursor-pointer"
              onMouseEnter={() => openModal(item.largeImageUrl)}
              onMouseLeave={closeModal}
            >
              <img
                src={item.thumbnailUrl}
                alt={`Project ${index + 1}`}
                className="w-full max-h-80 rounded-md"
              />
              {isModalOpen && selectedImage === item.largeImageUrl && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0 backdrop-filter rounded-md backdrop-blur-sm bg-gray-900 bg-opacity-50"></div>
                  <div className="relative z-10">
                    <button
                      className="px-4 py-2 bg-white rounded-md flex items-center"
                      onClick={() => window.open(item.websiteUrl, '_blank')}
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Launch Live Preview
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
    </>
  );
};

export default Portfolio;