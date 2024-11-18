import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const HabitCard = ({ habit }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      className={`p-6 rounded-xl bg-gradient-to-br ${habit.color} text-white shadow-lg`}
    >
      <div className="flex items-center mb-4">
        <habit.icon size={24} className="mr-3" />
        <h3 className="text-xl font-semibold">{habit.title}</h3>
      </div>
      <ul className="space-y-2">
        {habit.items.map((item) => (
          <li key={item} className="flex items-center">
            <Heart size={16} className="mr-2" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default HabitCard;