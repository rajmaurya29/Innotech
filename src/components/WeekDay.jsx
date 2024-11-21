import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import TaskList from './TaskList';

const WeekDay = ({ date, selected, tasks, onSelect, onDeleteTask, isPast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-4 rounded-lg ${
        selected ? 'bg-indigo-100' : 'bg-white'
      } ${
        isPast ? 'opacity-60' : ''
      } shadow-md cursor-pointer hover:shadow-lg transition-all`}
      onClick={() => onSelect(date)}
    >
      <h3 className="text-lg font-semibold text-indigo-900 mb-2">
        {format(date, 'EEEE')}
      </h3>
      <p className="text-sm text-gray-600">
        {format(date, 'MMM d')}
      </p>
      <TaskList 
        tasks={tasks} 
        date={date} 
        onDeleteTask={onDeleteTask}
        isPast={isPast}
      />
      {isPast && (
        <div className="mt-2 text-xs text-red-500">
          Past date - No new tasks allowed
        </div>
      )}
    </motion.div>
  );
};

export default WeekDay;