import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import image1 from '../assets/portfolio1.png';
import image2 from '../assets/portfolio2.png';
import image3 from '../assets/portfolio3.png';
import image4 from '../assets/portfolio4.png';
import image5 from '../assets/image1.png';
import image6 from '../assets/image2.png';
import image7 from '../assets/image3.png';
import image8 from '../assets/image4.png';



const Portfolio = () => {
  const portfolioItems = [
    { thumbnailUrl: image1, largeImageUrl: image5 },
    { thumbnailUrl: image2, largeImageUrl: image6 },
    { thumbnailUrl: image3, largeImageUrl: image7 },
    { thumbnailUrl: image4, largeImageUrl: image8 },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (largeImageUrl) => {
    setSelectedImage(largeImageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setIsModalOpen(false);
  };

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
            <div key={index} className="p-3 rounded-md cursor-pointer" onClick={() => openModal(item.largeImageUrl)}>
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

      {isModalOpen && (
        <div className="fixed inset-0 z-50 pt-10 overflow-auto bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative max-w-3xl mx-auto bg-white rounded-lg overflow-y-auto">
            <button className="absolute top-4 sm:right-14 right-6  text-gray-700" onClick={closeModal}>
            <div className='rounded-full sm:text-3xl text-2xl py-2 px-2 bg-gray-200 border'>
              <FaTimes />
              </div>
            </button>

            <div className="flex items-center justify-center">
              <div className="w-full h-auto max-w-full max-h-screen overflow-y-auto">
                <img src={selectedImage} alt="Large Image" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;