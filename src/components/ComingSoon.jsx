import React from 'react';
import { motion } from 'framer-motion';
import { Timer, Rocket } from 'lucide-react';
import BackButton from './BackButton';

const ComingSoon = ({ title }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-6 pt-28 pb-16">
      <BackButton />
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="mb-8 inline-block"
          >
            <div className="relative">
              <Rocket size={80} className="text-indigo-600 animate-pulse" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4"
              >
                <Timer size={40} className="text-purple-600" />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
          >
            {title}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're working hard to bring you something amazing. Stay tuned for updates!
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 inline-block bg-gradient-to-r from-indigo-500 to-purple-500 p-1 rounded-xl"
          >
            <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold">
                Under Construction
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoon;