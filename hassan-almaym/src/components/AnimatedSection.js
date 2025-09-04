'use client'
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedSection = ({ children, id, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`py-16 ${className}`}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={sectionVariants}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;