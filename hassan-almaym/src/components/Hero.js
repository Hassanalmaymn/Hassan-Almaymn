import React from 'react';
import Image from 'next/image';

const Hero = ({ personalInfo }) => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Profile image for mobile (top position) */}
        <div className="md:hidden w-full flex justify-center mb-8">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image 
              src={personalInfo.profileImage || '/images/placeholder-profile.jpg.svg'} 
              alt={personalInfo.name}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
        
        {/* Text content */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">{personalInfo.name}</h2>
          <h3 className="text-xl sm:text-2xl text-gray-600 mb-4 sm:mb-6">{personalInfo.title}</h3>
          <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">{personalInfo.bio}</p>
          <div className="flex justify-center md:justify-start space-x-4 flex-wrap">
            {personalInfo.social.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 mb-2"
              >
                <span className="sr-only">{social.platform}</span>
                {social.platform}
              </a>
            ))}
          </div>
          <div className="mt-6 sm:mt-8">
            <a 
              href="#contact" 
              className="inline-block bg-blue-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        {/* Profile image for desktop (right position) */}
        <div className="hidden md:flex md:w-1/2 justify-center">
          <div className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image 
              src={personalInfo.profileImage || '/images/placeholder-profile.jpg.svg'} 
              alt={personalInfo.name}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;