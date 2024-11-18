import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Book, Palette, CheckSquare, GamepadIcon, Brain, Map, Flower2 } from 'lucide-react';
import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';

const activities = [
  { name: 'Meditation', icon: Flower2, gradient: 'from-violet-500 to-purple-600' },
  { name: 'Reading', icon: Book, gradient: 'from-blue-500 to-indigo-600' },
  { name: 'Drawing', icon: Palette, gradient: 'from-pink-500 to-rose-600' },
  { name: 'Checks', icon: CheckSquare, gradient: 'from-emerald-500 to-green-600' },
  { name: 'HabEx', icon: Brain, gradient: 'from-amber-500 to-yellow-600' },
  { name: 'Rexspots', icon: Map, gradient: 'from-red-500 to-rose-600' },
  { name: 'Gaming', icon: GamepadIcon, gradient: 'from-indigo-500 to-purple-600' }
].map(activity => ({
  ...activity,
  path: `/activities/${activity.name.toLowerCase()}`
}));

const Activities = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const showBackButton = location.pathname !== '/';

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 px-6 pt-28 pb-16">
      {showBackButton && <BackButton />}
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-16 text-center"
        >
          Activities
        </motion.h1>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activities.map((activity) => (
            <motion.button
              key={activity.name}
              variants={item}
              onClick={() => navigate(activity.path)}
              className="relative h-64 rounded-2xl overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${activity.gradient}`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              
              <div className="relative h-full w-full p-8 flex flex-col items-center justify-center">
                <motion.div
                  className="p-4 bg-white/20 rounded-full backdrop-blur-sm mb-4"
                  whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                >
                  <activity.icon size={40} className="text-white" />
                </motion.div>
                <span className="text-2xl font-bold text-white tracking-wide">
                  {activity.name}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Activities;