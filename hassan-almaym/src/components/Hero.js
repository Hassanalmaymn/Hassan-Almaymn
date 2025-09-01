import React from 'react';
import Image from 'next/image';

const Hero = ({ personalInfo }) => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{personalInfo.name}</h2>
          <h3 className="text-2xl text-gray-600 mb-6">{personalInfo.title}</h3>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">{personalInfo.bio}</p>
          <div className="flex space-x-4">
            {personalInfo.social.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <span className="sr-only">{social.platform}</span>
                {social.platform}
              </a>
            ))}
          </div>
          <div className="mt-8">
            <a 
              href="#contact" 
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image 
              src={personalInfo.profileImage || '/images/placeholder-profile.jpg.svg'} 
              alt={personalInfo.name}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;