import React from 'react';
import { motion } from 'framer-motion';

function AnimatedBtn() {
  return (
    <motion.button
      whileHover={{  opacity:0.9 }}         // Zoom in slightly on hover
      whileTap={{ scale: 0.95 }}          // Shrink slightly on click/tap
      transition={{ type: "spring", stiffness: 400 }}
      className="px-6 py-2 my-1 bg-blue-500 text-white rounded-md shadow-md"
    >
      Submit
    </motion.button>
  );
}

export default AnimatedBtn;
