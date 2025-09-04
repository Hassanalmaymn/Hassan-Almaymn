import React from 'react';

const Education = ({ education }) => {
  return (
    <section id="education" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">Education</h2>
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="mb-6 sm:mb-10 bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-1 sm:mb-2">
                <span className="text-xs sm:text-sm font-medium text-blue-600">{edu.startDate} - {edu.endDate}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">{edu.degree}</h3>
              <h4 className="text-base sm:text-lg text-gray-600 mb-1 sm:mb-2">
                {edu.institution} 
                <span className="hidden xs:inline"> • </span>
                <span className="block xs:inline text-sm sm:text-base">{edu.location}</span>
              </h4>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{edu.description}</p>
              {edu.achievements && edu.achievements.length > 0 && (
                <div>
                  <h5 className="text-sm sm:text-md font-semibold text-gray-700 mb-1 sm:mb-2">Achievements</h5>
                  <ul className="list-disc list-outside ml-4 text-sm sm:text-base text-gray-600 space-y-0.5 sm:space-y-1">
                    {edu.achievements.map((achievement, achieveIndex) => (
                      <li key={achieveIndex} className="pl-1">{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;