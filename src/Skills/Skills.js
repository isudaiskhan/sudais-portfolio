// import React, { useState, useEffect } from 'react';

// const Skills = () => {
//   const [skills, setSkills] = useState([
//     { name: 'HTML', value: 0, color: 'bg-purple-600' },
//     { name: 'CSS', value: 0, color: 'bg-red-500' },
//     { name: 'JAVASCRIPT', value: 0, color: 'bg-green-600' },
//     { name: 'REACT JS', value: 0, color: 'bg-cyan-500' },
//     { name: 'BOOTSTRAP', value: 0, color: 'bg-slate-600' },
//     { name: 'TAILWIND CSS', value: 0, color: 'bg-indigo-600' },
//   ]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSkills(prevSkills =>
//         prevSkills.map(skill => ({
//           ...skill,
//           value: Math.min(skill.value + 1, getTargetValue(skill.name)),
//         }))
//       );
//     }, 20);

//     return () => clearInterval(interval);
//   }, []); // Run this effect only once when the component mounts

//   const getTargetValue = skillName => {
//     // Define your target values here (e.g., 95, 90, etc.)
//     const targetValues = {
//       'HTML': 95,
//       'CSS': 90,
//       'JAVASCRIPT': 91,
//       'REACT JS': 97,
//       'BOOTSTRAP': 80,
//       'TAILWIND CSS': 98,
//     };

//     return targetValues[skillName];
//   };

//   return (
//     <>
//       <div className="w-full py-24 px-4 bg-white">
//         <div className="max-w-[1140px] mx-auto">
//           <h1 className='md:text-5xl text-3xl font-semibold py-2 mt-3 text-center text-[#12141D]'>Skills & Experience</h1>
//         </div>
//       </div>

//       <div className='max-w-[1140px] mx-auto md:flex-row-reverse'>
//         <div className='gap-7 gap-x-20 grid grid-cols-2 pt-3 md:order-1 md:px-20'>
//           {skills.map((skill, index) => (
//             <div key={index} className="mb-6 md:mb-2">
//               <div className="flex flex-col md:flex-row justify-between">
//                 <span className="text-base font-medium text-black dark:text-white mb-2 md:mb-0">{skill.name}</span>
//                 <span className="text-xl font-medium text-[#35424a] mb-2 dark:text-white">{`${skill.value}%`}</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-2">
//                 <div style={{ width: `${skill.value}%` }} className={skill.color + ' h-2 rounded-full'}></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Skills;

































import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [skills, setSkills] = useState([
    { name: 'HTML', value: 0, color: 'bg-purple-600' },
    { name: 'CSS', value: 0, color: 'bg-red-500' },
    { name: 'JAVASCRIPT', value: 0, color: 'bg-green-600' },
    { name: 'REACT JS', value: 0, color: 'bg-cyan-500' },
    { name: 'BOOTSTRAP', value: 0, color: 'bg-slate-600' },
    { name: 'TAILWIND CSS', value: 0, color: 'bg-indigo-600' },
  ]);

  useEffect(() => {
    const resetSkills = () => {
      setSkills([
        { name: 'HTML', value: 0, color: 'bg-purple-600' },
        { name: 'CSS', value: 0, color: 'bg-red-500' },
        { name: 'JAVASCRIPT', value: 0, color: 'bg-green-600' },
        { name: 'REACT JS', value: 0, color: 'bg-cyan-500' },
        { name: 'BOOTSTRAP', value: 0, color: 'bg-slate-600' },
        { name: 'TAILWIND CSS', value: 0, color: 'bg-indigo-600' },
      ]);
    };

    const interval = setInterval(() => {
      setSkills(prevSkills =>
        prevSkills.map(skill => ({
          ...skill,
          value: Math.min(skill.value + 1, getTargetValue(skill.name)),
        }))
      );
    }, 20);

    // Add event listener for visibility change
    document.addEventListener('visibilitychange', resetSkills);

    // Cleanup: remove event listener and clear interval
    return () => {
      document.removeEventListener('visibilitychange', resetSkills);
      clearInterval(interval);
    };
  }, []);

  const getTargetValue = skillName => {
    const targetValues = {
      'HTML': 95,
      'CSS': 92,
      'JAVASCRIPT': 97,
      'REACT JS': 97,
      'BOOTSTRAP': 90,
      'TAILWIND CSS': 98,
    };

    return targetValues[skillName];
  };

  return (
         <>
          <div className="w-full py-24 px-4 bg-white" id='Skills'>
             <div className="max-w-[1140px] mx-auto">
               <h1 className='md:text-5xl text-3xl font-semibold py-2 mt-3 text-center text-[#12141D]'>Skills & Experience</h1>
             </div>
           </div>
    
           <div className='max-w-[1140px] mx-auto md:flex-row-reverse'>
             <div className='gap-7 gap-x-20 grid sm:ps-0 ps-12 sm:pe-0 pe-12 sm:grid-cols-2 pt-3 md:order-1 md:px-20'>
               {skills.map((skill, index) => (
                 <div key={index} className="mb-6 md:mb-2">
                   <div className="flex flex-col md:flex-row justify-between">
                     <span className="text-base font-medium text-black dark:text-white mb-2 md:mb-0">{skill.name}</span>
                     <span className="text-xl font-medium text-[#35424a] mb-2 dark:text-white">{`${skill.value}%`}</span>
                   </div>
                   <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-2">
                     <div style={{ width: `${skill.value}%` }} className={skill.color + ' h-2 rounded-full'}></div>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </>
       );
     }
    
     export default Skills;
    
    