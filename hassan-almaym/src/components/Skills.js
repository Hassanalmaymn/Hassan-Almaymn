import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{skillCategory.category}</h3>
              <div className="space-y-3 sm:space-y-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1 text-sm sm:text-base">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                      <div 
                        className="bg-blue-600 h-1.5 sm:h-2 rounded-full transition-all duration-500 ease-in-out" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;