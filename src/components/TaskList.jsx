import React from 'react';
import { format } from 'date-fns';

const TaskList = ({ tasks, date, onDeleteTask, isPast }) => {
  const dateKey = format(date, 'yyyy-MM-dd');
  const dayTasks = tasks[dateKey] || [];

  return (
    <div className="mt-4">
      {dayTasks.map((task, taskIndex) => (
        <div
          key={taskIndex}
          className="flex items-center justify-between bg-white p-2 rounded mb-2 shadow-sm"
        >
          <span className="text-sm text-gray-700">{task}</span>
          {!isPast && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDeleteTask(date, taskIndex);
              }}
              className="text-red-500 hover:text-red-700"
            >
              ×
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;