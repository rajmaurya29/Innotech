import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format, startOfWeek, addDays, isAfter, startOfDay, isSameWeek } from 'date-fns';
import Calendar from 'react-calendar';
import { CalendarIcon } from 'lucide-react';
import BackButton from '../components/BackButton';
import WeekDay from '../components/WeekDay';
import 'react-calendar/dist/Calendar.css';

const WeeklyPlanner = () => {
  const [tasks, setTasks] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);
  const [newTask, setNewTask] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentWeekStart, setCurrentWeekStart] = useState(startOfWeek(new Date()));

  const weekDays = [...Array(7)].map((_, index) => addDays(currentWeekStart, index));
  const today = startOfDay(new Date());

  const handleAddTask = (date) => {
    if (!isAfter(startOfDay(date), today)) {
      alert("Cannot add tasks for past days!");
      return;
    }

    if (newTask.trim()) {
      const dateKey = format(date, 'yyyy-MM-dd');
      setTasks(prev => ({
        ...prev,
        [dateKey]: [...(prev[dateKey] || []), newTask]
      }));
      setNewTask('');
    }
  };

  const handleDeleteTask = (date, taskIndex) => {
    const dateKey = format(date, 'yyyy-MM-dd');
    setTasks(prev => ({
      ...prev,
      [dateKey]: prev[dateKey].filter((_, index) => index !== taskIndex)
    }));
  };

  const handleCalendarChange = (date) => {
    const newWeekStart = startOfWeek(date);
    setCurrentWeekStart(newWeekStart);
    setShowCalendar(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 p-6">
      <BackButton />
      <div className="max-w-6xl mx-auto pt-16" style={{marginTop:"40px"}}>
        <div className="flex justify-between items-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-indigo-900"
          >
            Weekly Planner
          </motion.h1>
          
          <div className="relative">
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <CalendarIcon size={20} />
              <span>Select Week</span>
            </button>

            <AnimatePresence>
              {showCalendar && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 top-12 z-50"
                >
                  <div className="p-4 bg-white rounded-lg shadow-xl">
                    <Calendar
                      onChange={handleCalendarChange}
                      value={currentWeekStart}
                      className="custom-calendar"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 mb-8">
          {weekDays.map((date, index) => (
            <WeekDay
              key={index}
              date={date}
              selected={selectedDay && isSameWeek(date, selectedDay)}
              tasks={tasks}
              onSelect={setSelectedDay}
              onDeleteTask={handleDeleteTask}
              isPast={!isAfter(startOfDay(date), today)}
            />
          ))}
        </div>

        {selectedDay && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-900">
              Add Task for {format(selectedDay, 'EEEE, MMMM d')}
            </h3>
            <div className="flex gap-4">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter your task..."
                className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleAddTask(selectedDay);
                  }
                }}
              />
              <button
                onClick={() => handleAddTask(selectedDay)}
                className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
                disabled={!isAfter(startOfDay(selectedDay), today)}
              >
                Add Task
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default WeeklyPlanner;