'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Hero = ({ personalInfo }) => {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.4 }
    },
    hover: { 
      scale: 1.05,
      backgroundColor: '#2563EB',
      transition: { duration: 0.3 }
    }
  };

  return (
    <AnimatedSection id="about" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Profile image for mobile (top position) */}
        <motion.div 
          className="md:hidden w-full flex justify-center mb-8"
          variants={imageVariants}
        >
          <motion.div 
            className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <Image 
              src={personalInfo.profileImage || '/images/placeholder-profile.jpg.svg'} 
              alt={personalInfo.name}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </motion.div>
        </motion.div>
        
        {/* Text content */}
        <motion.div 
          className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left"
          variants={textVariants}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {personalInfo.name}
          </motion.h2>
          <motion.h3 
            className="text-xl sm:text-2xl text-gray-600 mb-4 sm:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {personalInfo.title}
          </motion.h3>
          <motion.p 
            className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {personalInfo.bio}
          </motion.p>
          <motion.div 
            className="flex justify-center md:justify-start space-x-4 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {personalInfo.social.map((social, index) => (
              <motion.a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 mb-2"
                whileHover={{ scale: 1.1, color: '#2563EB' }}
                transition={{ duration: 0.2 }}
              >
                <span className="sr-only">{social.platform}</span>
                {social.platform}
              </motion.a>
            ))}
          </motion.div>
          <motion.div 
            className="mt-6 sm:mt-8"
            variants={buttonVariants}
          >
            <motion.a 
              href="#contact" 
              className="inline-block bg-blue-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition duration-300"
              whileHover="hover"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Profile image for desktop (right position) */}
        <motion.div 
          className="hidden md:flex md:w-1/2 justify-center"
          variants={imageVariants}
        >
          <motion.div 
            className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <Image 
              src={personalInfo.profileImage || '/images/placeholder-profile.jpg.svg'} 
              alt={personalInfo.name}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Hero;