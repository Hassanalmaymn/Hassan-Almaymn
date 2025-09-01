import React from 'react';

const Education = ({ education }) => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Education</h2>
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="mb-10 bg-white rounded-lg p-6 shadow-md">
              <div className="mb-2">
                <span className="text-sm font-medium text-blue-600">{edu.startDate} - {edu.endDate}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
              <h4 className="text-lg text-gray-600 mb-2">{edu.institution} • {edu.location}</h4>
              <p className="text-gray-600 mb-4">{edu.description}</p>
              {edu.achievements && edu.achievements.length > 0 && (
                <div>
                  <h5 className="text-md font-semibold text-gray-700 mb-2">Achievements</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {edu.achievements.map((achievement, achieveIndex) => (
                      <li key={achieveIndex}>{achievement}</li>
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