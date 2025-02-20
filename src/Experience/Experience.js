import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const [experience, setExperience] = useState({
    years: 0,
    clients: 0,
    projects: 0,
  });

  useEffect(() => {
    const durations = {
      years: 1000,
      clients: 100,
      projects: 40,
    };

    const resetExperience = () => {
      setExperience({
        years: 0,
        clients: 0,
        projects: 0,
      });
    };

    const intervals = Object.keys(experience).map((property) => {
      return setInterval(() => {
        setExperience((prevExperience) => ({
          ...prevExperience,
          [property]: Math.min(
            prevExperience[property] + 1,
            property === "years" ? 3 : property === "clients" ? 30 : 70
          ),
        }));
      }, durations[property]);
    });

    document.addEventListener("visibilitychange", resetExperience);

    return () => {
      document.removeEventListener("visibilitychange", resetExperience);
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
    <>
      <div className="bg-gray-100 mt-10">
        <section className="py-32 container xl:px-5 sm:px-3 px-5 mx-auto">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 120, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-4"
            >
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h2 className="text-7xl font-semibold mb-4">
                  {experience.years}+
                </h2>
                <h2 className="text-3xl font-semibold mb-4">
                  Years Experience
                </h2>
                <p className="text-lg text-gray-600">
                  Over 3 years of valuable experience in the industry.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h2 className="text-7xl font-semibold mb-4">
                  {experience.clients}+
                </h2>
                <h2 className="text-3xl font-semibold mb-4">Happy Clients</h2>
                <p className="text-lg text-gray-600">
                  Serving numerous satisfied clients with excellence.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h2 className="text-7xl font-semibold mb-4">
                  {experience.projects}+
                </h2>
                <h2 className="text-3xl font-semibold mb-4">
                  Completed Projects
                </h2>
                <p className="text-lg text-gray-600">
                  Successfully completed a variety of projects.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Experience;
