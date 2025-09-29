import React from 'react';
import { motion } from 'framer-motion';

const ReligionSymbols: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center items-center space-x-8 mb-8"
    >
      {/* Hindu Swastik */}
      <div className="text-4xl text-orange-600 hover:scale-110 transition-transform duration-300">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor">
          <g transform="translate(25,25)">
            <rect x="-2" y="-20" width="4" height="16" />
            <rect x="-2" y="4" width="4" height="16" />
            <rect x="-20" y="-2" width="16" height="4" />
            <rect x="4" y="-2" width="16" height="4" />
            <rect x="4" y="-12" width="8" height="4" />
            <rect x="-12" y="8" width="8" height="4" />
            <rect x="-12" y="-12" width="4" height="8" />
            <rect x="8" y="4" width="4" height="8" />
          </g>
        </svg>
      </div>

      {/* Christian Cross */}
      <div className="text-4xl text-blue-700 hover:scale-110 transition-transform duration-300">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor">
          <g transform="translate(25,25)">
            <rect x="-3" y="-22" width="6" height="44" />
            <rect x="-15" y="-3" width="30" height="6" />
          </g>
        </svg>
      </div>

      {/* Islamic Crescent */}
      <div className="text-4xl text-green-700 hover:scale-110 transition-transform duration-300">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor">
          <path d="M25 5C16.2 5 9 12.2 9 21s7.2 16 16 16c2.5 0 4.9-.5 7.1-1.4-3.6 2.1-7.7 3.2-12.1 3.2-12.6 0-23-10.4-23-23S7.4-2 20-2c4.4 0 8.5 1.2 12.1 3.2C29.9 5.5 27.5 5 25 5z"/>
          <polygon points="35,15 37,20 42,20 38,23 39,28 35,25 31,28 32,23 28,20 33,20" fill="currentColor"/>
        </svg>
      </div>
    </motion.div>
  );
};

export default ReligionSymbols;