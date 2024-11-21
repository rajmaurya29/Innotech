import React from 'react';
import { motion } from 'framer-motion';

const ActivityCard = ({ activity, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="group relative h-72 w-full rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Card Background with Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${activity.gradient} opacity-90`}>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
          bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/20 rounded-tl-full transform translate-x-16 translate-y-16" />
        <div className="absolute left-0 top-0 w-24 h-24 bg-black/10 rounded-br-full transform -translate-x-12 -translate-y-12" />
      </div>
      
      {/* Content */}
      <div className="relative h-full w-full p-8 flex flex-col items-center justify-center">
        <motion.div
          className="p-6 bg-white/20 rounded-2xl backdrop-blur-sm mb-6 shadow-xl"
          whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <activity.icon size={48} className="text-white" />
        </motion.div>
        <span className="text-3xl font-bold text-white tracking-wide mb-2">
          {activity.name}
        </span>
        <span className="text-white/80 text-sm">Click to explore</span>
      </div>
    </motion.button>
  );
};

export default ActivityCard;