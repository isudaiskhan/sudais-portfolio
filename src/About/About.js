import React, { useState, useEffect } from "react";
import image from "../assets/myimage.jpg";
import resume from "../assets/Sudais+Web+Developer+Resume.pdf";
import { motion } from "framer-motion";
import { FaCloudDownloadAlt } from "react-icons/fa";

const About = () => {
  const handleDownload = () => {
    const resumeUrl = resume;
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Sudais_Khan_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const initialXRight = windowSize.width >= 640 ? 200 : 100;

  const initialRed = {
    x: initialXRight,
    opacity: 0,
  };

  return (
    <>
      <div
        className="w-full bg-white py-20 container mx-auto xl:px-5 sm:px-3 px-5 overflow-hidden"
        id="about"
      >
        <div className="mt-10 flex lg:flex-row flex-col items-center justify-start">
          <motion.img
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 60,
              duration: 1,
            }}
            src={image}
            className="w-96 me-auto rounded-xl my-4 lg:mr-8"
          />
          <motion.div
            initial={initialRed}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="flex flex-col justify-center lg:ms-10"
          >
            <h1 className="md:text-4xl text-3xl tracking-wide text-[#12141D] font-bold py-4">
              About Me
            </h1>
            <p className="text-[#474747] text-justify leading-7">
              Hello! I'm Sudais Khan, a passionate Full-stack and MERN-Stack
              developer. I specialize in creating seamless web applications
              using React.js, Node.js, Express.js, MongoDB, and Mysql. With
              expertise in both frontend and backend development, I transform
              complex problems into intuitive and efficient solutions.
              Continuously learning and exploring new technologies, I aim to
              deliver modern, robust, and user-friendly web experiences. I
              provide top-notch services for growing companies. I am fast,
              professional and reliable. So get in touch now! Let's collaborate
              to bring your ideas to life. Contact me to discuss your next
              project.
            </p>
            <div className="flex items-center justify-start">
              <button
                className="flex items-center sm:text-lg font-medium bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-emerald-500 hover:via-sky-500 hover:to-indigo-500 hover:bg-gradient-to-r hover:from-10% hover:via-30% hover:to-90% text-white shadow-2xl shadow-indigo-500 hover:shadow-none mt-10 py-4 px-4 rounded-lg"
                onClick={handleDownload}
              >
                Download Resume
                <FaCloudDownloadAlt className="text-xl ml-3" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
