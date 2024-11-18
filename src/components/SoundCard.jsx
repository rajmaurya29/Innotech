import React from 'react';
import { Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';

const SoundCard = ({ title, icon: Icon, isPlaying, onClick, gradient }) => {
  return (
    <motion.button
      onClick={onClick}
      className="relative w-full rounded-xl overflow-hidden"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div className="relative p-6 flex items-center space-x-4">
        <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
          <Icon size={24} className="text-white" />
        </div>
        <span className="text-lg font-medium text-white">{title}</span>
        <div className="ml-auto p-2 bg-white/20 rounded-full backdrop-blur-sm">
          {isPlaying ? (
            <Pause size={20} className="text-white" />
          ) : (
            <Play size={20} className="text-white" />
          )}
        </div>
      </div>
    </motion.button>
  );
};

export default SoundCard;