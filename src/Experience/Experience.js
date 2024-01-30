import React, { useState, useEffect } from 'react';

const Experience = () => {
  const [experience, setExperience] = useState({
    years: 0,
    clients: 0,
    projects: 0,
  });

  useEffect(() => {
    const durations = {
      years: 1000, // 1 second
      clients: 100, // 2 seconds
      projects: 70, // 3 seconds
    };

    const resetExperience = () => {
      setExperience({
        years: 0,
        clients: 0,
        projects: 0,
      });
    };

    const intervals = Object.keys(experience).map(property => {
      return setInterval(() => {
        setExperience(prevExperience => ({
          ...prevExperience,
          [property]: Math.min(prevExperience[property] + 1, property === 'years' ? 3 : property === 'clients' ? 20 : 50),
        }));
      }, durations[property]);
    });

    // Add event listener for visibility change
    document.addEventListener('visibilitychange', resetExperience);

    // Cleanup: remove event listener and clear intervals
    return () => {
      document.removeEventListener('visibilitychange', resetExperience);
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  return (
    <section className="py-36 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Box 1 - Experience */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center transform transition duration-500 hover:scale-105 hover:opacity-80">
            <h2 className="text-7xl font-semibold mb-4">{experience.years}</h2>
            <h2 className="text-3xl font-semibold mb-4">Years Experience</h2>
            <p className="text-lg text-gray-600">Over 3 years of valuable experience in the industry.</p>
          </div>

          {/* Box 2 - Happy Clients */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center transform transition duration-500 hover:scale-105 hover:opacity-80">
            <h2 className="text-7xl font-semibold mb-4">{experience.clients}</h2>
            <h2 className="text-3xl font-semibold mb-4">Happy Clients</h2>
            <p className="text-lg text-gray-600">Serving numerous satisfied clients with excellence.</p>
          </div>

          {/* Box 3 - Completed Projects */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center transform transition duration-500 hover:scale-105 hover:opacity-80">
            <h2 className="text-7xl font-semibold mb-4">{experience.projects}</h2>
            <h2 className="text-3xl font-semibold mb-4">Completed Projects</h2>
            <p className="text-lg text-gray-600">Successfully completed a variety of projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
