import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import image1 from "../assets/2.png";
import image2 from "../assets/client-4.jpg";
import image3 from "../assets/4.png";
import image4 from "../assets/circle.png";
import image5 from "../assets/5.png";
import image6 from "../assets/devin.webp";
import flag1 from "../assets/Belgium.png";
import flag2 from "../assets/South Africa.png";
import flag3 from "../assets/United Kingdom.png";
import flag4 from "../assets/canada logo.png";
import flag5 from "../assets/Australia.png";
import flag6 from "../assets/united states .png";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: image1,
      title: "Elena Hill",
      about: "CEO & Founder",
      flag: flag1,
      text: "Amazing work from Sudais and have created a great website for me. We will keep improving and growing as we go. Thanks Sudais you are a great Full-stack developer. Looking forward to working more as we grow the business!",
    },
    {
      image: image2,
      title: "Mikhael",
      about: "Finance Manager",
      flag: flag2,
      text: "Sudais is one of the best coders you can find in the Fiverr . He is not only professional but truly cares about his work with pride. It is a pleasure to have this opportunity to work with Sudais. Recommend with 5 stars!",
    },
    {
      image: image3,
      title: "Gila Shapiro",
      about: "Global Brand Manager",
      flag: flag3,
      text: "Amazing work from Sudais and we have created a great website. We will keep improving and growing as we go. Thanks Sudais you are a great designer and developer. Looking forward to working more as we grow the business!",
    },
    {
      image: image4,
      title: "John Wills",
      about: "C.E.O & Founder",
      flag: flag4,
      text: "I highly recommend Sudais for his exceptional work creating my website . His professionalism, expertise made the process smooth and enjoyable. The final result is visually stunning, fully functional, and user-friendly. Thank you, mate.",
    },
    {
      image: image5,
      title: "Tonia Howell",
      about: "Product Manager",
      flag: flag5,
      text: "Sudais is talented, quick, friendly, and professional! He delivered well beyond what I was asking for and did so in record time!! I’ll be using him forever now as I’ve genuinely found the only skilled website developer I’ll ever need! FIVE STARS!!",
    },
    {
      image: image6,
      title: "Mike Stark",
      about: "Software Engineer",
      flag: flag6,
      text: "Sudais, Is one of the most patient ,talented web developer that i have worked with. Great experience working with him Will surely work with him again Great Job, Sudais",
    },
  ];
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    // Automatic slideshow every 5 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [currentSlide]);

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

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures that effect runs only once after mount

  const initialXLeft = windowSize.width >= 640 ? -200 : -100; // Initial X position for left animation
  const initialXRight = windowSize.width >= 640 ? 200 : 100; // Initial X position for right animation

  const initialGreen = {
    x: initialXLeft, // Set initial position for green element
    opacity: 0,
  };

  const initialRed = {
    x: initialXRight, // Set initial position for red element
    opacity: 0,
  };

  return (
    <>
      <div className="relative bg-cover bg-center mt-20 h-[1300px] bg-no-repeat sm:pt-64 pt-40 bg-fixed overflow-x-hidden bg-[#25262A]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute top-0 left-0 w-full transform -rotate-180"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        <motion.h1
          initial={initialGreen} // Initial position: off-screen to the left, hidden, starting from a greater distance
          whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
            opacity: { duration: 1 }, // Smooth opacity transition
            ease: "easeIn", // Easing function
            duration: 1, // Overall animation duration
          }}
          className="sm:text-6xl font-bold text-2xl overflow-hidden text-center text-white"
        >
          TESTIMONIALS
        </motion.h1>

        <motion.h1
          initial={initialRed} // Initial position: off-screen to the left, hidden, starting from a greater distance
          whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
            opacity: { duration: 1 }, // Smooth opacity transition
            ease: "easeIn", // Easing function
            duration: 1, // Overall animation duration
          }}
          className="mt-6 tracking-widest text-lg text-center text-white"
        >
          what our clients are saying
        </motion.h1>
        <div className="max-w-screen mx-auto h-[500px] flex items-center justify-center relative mt-5">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: "100%" }}
              animate={{
                opacity: index === currentSlide ? 1 : 0,
                x: index === currentSlide ? "0%" : "100%",
              }}
              transition={{ type: "tween", duration: 0.5 }}
              className="absolute inset-0 text-white text-center"
            >
              <motion.img
                initial={initialGreen} // Initial position: off-screen to the left, hidden, starting from a greater distance
                whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
                  opacity: { duration: 1 }, // Smooth opacity transition
                  ease: "easeIn", // Easing function
                  duration: 1, // Overall animation duration
                }}
                src={slide.image}
                alt={slide.title}
                className="lg:w-52 sm:w-44 border-4 border-[#1b1e20ef] w-24 mx-auto mt-6 rounded-full"
              />
              <motion.img
                initial={initialRed} // Initial position: off-screen to the left, hidden, starting from a greater distance
                whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
                  opacity: { duration: 1 }, // Smooth opacity transition
                  ease: "easeIn", // Easing function
                  duration: 1, // Overall animation duration
                }}
                src={slide.flag}
                alt={slide.title}
                className="w-10 mx-auto mt-2"
              />

              <motion.p
                initial={initialGreen} // Initial position: off-screen to the left, hidden, starting from a greater distance
                whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
                  opacity: { duration: 1 }, // Smooth opacity transition
                  ease: "easeIn", // Easing function
                  duration: 1, // Overall animation duration
                }}
                className="mt-10 tracking-wider rounded-md leading-loose bg-[#f8f9fac7] text-[#212529] p-10 sm:w-11/12 mx-auto"
              >
                {slide.text}
              </motion.p>
              <motion.h1
                initial={initialRed} // Initial position: off-screen to the left, hidden, starting from a greater distance
                whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
                  opacity: { duration: 1 }, // Smooth opacity transition
                  ease: "easeIn", // Easing function
                  duration: 1, // Overall animation duration
                }}
                className="text-3xl mt-6 text-white font-medium mx-auto"
              >
                {slide.title}
              </motion.h1>

              <motion.h1
                initial={initialGreen} // Initial position: off-screen to the left, hidden, starting from a greater distance
                whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
                  opacity: { duration: 1 }, // Smooth opacity transition
                  ease: "easeIn", // Easing function
                  duration: 1, // Overall animation duration
                }}
                className="mt-6 text-white mx-auto"
              >
                {slide.about}
              </motion.h1>
            </motion.div>
          ))}
          <button
            className="prev absolute text-white text-2xl top-1/2 left-4 transform -translate-y-1/2"
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <button
            className="next absolute top-1/2 text-white text-2xl right-4 transform -translate-y-1/2"
            onClick={nextSlide}
          >
            &#10095;
          </button>
        </div>

        {/* Wavy bottom shape outside the container */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 w-full"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Testimonial;
