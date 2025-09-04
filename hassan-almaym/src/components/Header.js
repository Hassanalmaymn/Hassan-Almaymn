'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ personalInfo }) => {
  // Navigation links removed as per request
  /* const navLinks = [
    { href: "#about", label: ui?.navigation?.about || "About" },
    { href: "#experience", label: ui?.navigation?.experience || "Experience" },
    { href: "#projects", label: ui?.navigation?.projects || "Projects" },
    { href: "#skills", label: ui?.navigation?.skills || "Skills" },
    { href: "#education", label: ui?.navigation?.education || "Education" },
    { href: "#contact", label: ui?.navigation?.contact || "Contact" },
  ]; */

  return (
    <motion.header 
      className="py-6 relative z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-center items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h1 className="text-3xl font-bold text-gray-800">{personalInfo.name}</h1>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;