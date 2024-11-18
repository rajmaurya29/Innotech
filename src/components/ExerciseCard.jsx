import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Timer } from 'lucide-react';

const ExerciseCard = ({ exercise }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      className={`p-6 rounded-xl bg-gradient-to-br ${exercise.color} text-white shadow-lg`}
    >
      <div className="flex items-center mb-4">
        <exercise.icon size={24} className="mr-3" />
        <h3 className="text-xl font-semibold">{exercise.title}</h3>
      </div>
      <div className="flex items-center mb-3">
        <Timer size={16} className="mr-2" />
        <span>{exercise.duration}</span>
      </div>
      <ul className="space-y-2">
        {exercise.activities.map((activity) => (
          <li key={activity} className="flex items-center">
            <Heart size={16} className="mr-2" />
            {activity}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExerciseCard;