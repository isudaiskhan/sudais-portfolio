import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const Skills = () => {
  const initialSkillsDescription = [
    { name: 'HTML', value: 0, color: 'bg-purple-600' },
    { name: 'CSS', value: 0, color: 'bg-red-500' },
    { name: 'JAVASCRIPT', value: 0, color: 'bg-green-600' },
    { name: 'REACT JS', value: 0, color: 'bg-cyan-500' },
    { name: 'BOOTSTRAP', value: 0, color: 'bg-slate-600' },
    { name: 'TAILWIND CSS', value: 0, color: 'bg-indigo-600' },
  ];

  const initialSkillsSpecification = [
    { name: 'NODE JS', value: 0, color: 'bg-blue-600' },
    { name: 'EXPRESS JS', value: 0, color: 'bg-yellow-500' },
    { name: 'MYSQL', value: 0, color: 'bg-pink-600' },
    { name: 'MONGO DB', value: 0, color: 'bg-orange-500' },
    { name: 'PHP', value: 0, color: 'bg-gray-600' },
  ];

  const [skillsDescription, setSkillsDescription] = useState(initialSkillsDescription);
  const [skillsSpecification, setSkillsSpecification] = useState(initialSkillsSpecification);
  const [category, setCategory] = useState('Description');

  useEffect(() => {
    const resetSkills = () => {
      setSkillsDescription(initialSkillsDescription);
      setSkillsSpecification(initialSkillsSpecification);
    };

    const interval = setInterval(() => {
      setSkillsDescription(prevSkills =>
        prevSkills.map(skill => ({
          ...skill,
          value: Math.min(skill.value + 1, getTargetValue(skill.name, false)),
        }))
      );
      setSkillsSpecification(prevSkills =>
        prevSkills.map(skill => ({
          ...skill,
          value: Math.min(skill.value + 1, getTargetValue(skill.name, true)),
        }))
      );
    }, 20);

    document.addEventListener('visibilitychange', resetSkills);

    return () => {
      document.removeEventListener('visibilitychange', resetSkills);
      clearInterval(interval);
    };
  }, []);

  const getTargetValue = (skillName, isSecondFilteredItem) => {
    const firstFilteredValues = {
      'HTML': 97,
      'CSS': 96,
      'JAVASCRIPT': 100,
      'REACT JS': 100,
      'BOOTSTRAP': 98,
      'TAILWIND CSS': 100,
    };

    const secondFilteredValues = {
      'NODE JS': 100,
      'EXPRESS JS': 100,
      'MYSQL': 99,
      'MONGO DB': 99,
      'PHP': 98,
    };

    return isSecondFilteredItem ? secondFilteredValues[skillName] : firstFilteredValues[skillName];
  };

  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
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

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const initialXLeft = windowSize.width >= 640 ? -200 : -100;
  const initialXRight = windowSize.width >= 640 ? 200 : 100;

  const initialGreen = {
    x: initialXLeft,
    opacity: 0,
  };

  const initialRed = {
    x: initialXRight,
    opacity: 0,
  };

  return (
    <>
    <div className="w-full py-20 mt-12 xl:px-8 px-6 container mx-auto bg-white overflow-hidden" id="Skills">
      <motion.h1
        initial={initialGreen}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="sm:text-5xl text-4xl font-semibold py-2 mt-3 text-center text-[#12141D]"
      >
        Skills & Experience
      </motion.h1>

      <div className="md:flex-row-reverse overflow-hidden">
        <motion.div
          initial={initialGreen}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="flex md:justify-end justify-center py-10 mt-5 flex-wrap overflow-hidden"
        >
          <button
            onClick={() => handleCategoryClick('Description')}
            className={`${
              category === 'Description'
                ? 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-emerald-500 hover:via-sky-500 hover:to-indigo-500 hover:bg-gradient-to-r hover:from-10% hover:via-30% hover:to-90% text-white'
                : 'bg-white border border-emerald-500 text-black'
            } sm:px-8 sm:py-3 px-5 py-2.5 rounded-s-md`}
          >
            Frontend Skills
          </button>
          <button
            onClick={() => handleCategoryClick('Specification')}
            className={`${
              category === 'Specification'
                ? 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-emerald-500 hover:via-sky-500 hover:to-indigo-500 hover:bg-gradient-to-r hover:from-10% hover:via-30% hover:to-90% text-white'
                : 'text-black bg-white border border-emerald-500'
            } sm:px-4 sm:py-3 px-3 py-2.5 rounded-e-md`}
          >
            Backend Skills
          </button>
        </motion.div>

        {category === 'Description' && (
          <motion.div
            initial={initialGreen}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="gap-7 gap-x-20 grid sm:grid-cols-2 pt-3 md:order-1"
          >
            {skillsDescription.map((skill, index) => (
              <div key={index} className="mb-6 md:mb-2">
                <div className="flex flex-col md:flex-row justify-between">
                  <span className="text-base font-medium text-black dark:text-white mb-2 md:mb-0">{skill.name}</span>
                  <span className="text-xl font-medium text-[#35424a] mb-2 dark:text-white">{`${skill.value}%`}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-2">
                  <div style={{ width: `${skill.value}%` }} className={`${skill.color} h-2 rounded-full`}></div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {category === 'Specification' && (
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
            className="gap-7 gap-x-20 grid sm:grid-cols-2 pt-3 md:order-1"
          >
            {skillsSpecification.map((skill, index) => (
              <div key={index} className="mb-6 md:mb-2">
                <div className="flex flex-col md:flex-row justify-between">
                  <span className="text-base font-medium text-black dark:text-white mb-2 md:mb-0">{skill.name}</span>
                  <span className="text-xl font-medium text-[#35424a] mb-2 dark:text-white">{`${skill.value}%`}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-2">
                  <div style={{ width: `${skill.value}%` }} className={`${skill.color} h-2 rounded-full`}></div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
    </>
  );
};

export default Skills;