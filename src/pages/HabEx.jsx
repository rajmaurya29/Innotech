import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Brain, FlowerIcon, Moon, Sun } from 'lucide-react';
import HabitCard from '../components/HabitCard';
import ExerciseCard from '../components/ExerciseCard';
import BackButton from '../components/BackButton';

const HabEx = () => {
  const habits = [
    {
      title: "Morning Routine",
      icon: Sun,
      items: ["Deep breathing", "Gratitude journal", "Healthy breakfast"],
      color: "from-orange-400 to-amber-500"
    },
    {
      title: "Evening Routine",
      icon: Moon,
      items: ["Digital sunset", "Reading", "Sleep schedule"],
      color: "from-indigo-400 to-purple-500"
    }
  ];

  const exercises = [
    {
      title: "Physical Wellness",
      icon: Dumbbell,
      duration: "15-30 mins",
      activities: ["Gentle stretching", "Yoga poses", "Light cardio"],
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Mental Wellness",
      icon: Brain,
      duration: "10-20 mins",
      activities: ["Mindfulness", "Meditation", "Deep breathing"],
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Relaxation",
      icon: FlowerIcon,
      duration: "15-20 mins",
      activities: ["Progressive relaxation", "Guided imagery", "Body scan"],
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-6 pt-28 pb-16">
      <BackButton />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Habits & Exercises for Relaxation
        </motion.h1>

        <motion.section
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-8 text-gray-800">Daily Habits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {habits.map((habit) => (
              <HabitCard key={habit.title} habit={habit} />
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          initial="hidden"
          animate="show"
        >
          <h2 className="text-3xl font-semibold mb-8 text-gray-800">Relaxation Exercises</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {exercises.map((exercise) => (
              <ExerciseCard key={exercise.title} exercise={exercise} />
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default HabEx;