import React from 'react';

const Footer = ({ personalInfo, ui }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 sm:py-8 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold">{personalInfo.name}</h3>
            <p className="text-gray-400 text-sm sm:text-base">{personalInfo.title}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {personalInfo.social.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors duration-300"
              >
                <span className="sr-only">{social.platform}</span>
                {social.platform}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700 text-center text-gray-400">
          <p className="text-xs sm:text-sm">{ui?.footer?.copyright?.replace('2023', currentYear) || `© ${currentYear} ${personalInfo.name}. All rights reserved.`}</p>
          <p className="text-xs sm:text-sm mt-2">{ui?.footer?.madeWith || 'Made with Next.js'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;