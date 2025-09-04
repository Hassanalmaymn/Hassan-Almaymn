import React from 'react';

const Experience = ({ experiences }) => {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">Work Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={index} className="mb-8 sm:mb-12 relative pl-6 sm:pl-8 border-l-2 border-gray-200">
              <div className="absolute -left-1.5 sm:-left-2 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-600"></div>
              <div className="mb-1 sm:mb-2">
                <span className="text-xs sm:text-sm font-medium text-blue-600">{experience.startDate} - {experience.endDate}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">{experience.title}</h3>
              <h4 className="text-base sm:text-lg text-gray-600 mb-1 sm:mb-2">
                {experience.company} 
                <span className="hidden xs:inline"> • </span>
                <span className="block xs:inline text-sm sm:text-base">{experience.location}</span>
              </h4>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{experience.description}</p>
              <ul className="list-disc list-outside ml-4 text-sm sm:text-base text-gray-600 space-y-0.5 sm:space-y-1">
                {experience.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="pl-1">{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;