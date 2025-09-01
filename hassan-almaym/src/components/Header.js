import React from 'react';
import Link from 'next/link';

const Header = ({ personalInfo }) => {
  return (
    <header className="py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-800">{personalInfo.name}</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#about" className="text-gray-600 hover:text-gray-900">About</a></li>
            <li><a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a></li>
            <li><a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a></li>
            <li><a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a></li>
            <li><a href="#education" className="text-gray-600 hover:text-gray-900">Education</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;