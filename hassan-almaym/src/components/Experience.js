import React from 'react';

const Experience = ({ experiences }) => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Work Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={index} className="mb-12 relative pl-8 border-l-2 border-gray-200">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
              <div className="mb-2">
                <span className="text-sm font-medium text-blue-600">{experience.startDate} - {experience.endDate}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{experience.title}</h3>
              <h4 className="text-lg text-gray-600 mb-2">{experience.company} • {experience.location}</h4>
              <p className="text-gray-600 mb-4">{experience.description}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {experience.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex}>{responsibility}</li>
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