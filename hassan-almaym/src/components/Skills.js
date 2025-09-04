'use client';
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Skills = ({ skills }) => {
  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    })
  };

  return (
    <AnimatedSection id="skills" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {skills.map((skillCategory, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition duration-300"
              variants={categoryVariants}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{skillCategory.category}</h3>
              <div className="space-y-3 sm:space-y-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1 text-sm sm:text-base">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                      <motion.div 
                        className="bg-blue-600 h-1.5 sm:h-2 rounded-full" 
                        variants={skillVariants}
                        custom={skill.level}
                        initial="hidden"
                        animate="visible"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;