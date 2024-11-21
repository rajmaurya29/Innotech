import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Book, Palette, CheckSquare, GamepadIcon, Brain, Map, Timer, BookAudio } from 'lucide-react';
import ActivityCard from '../components/ActivityCard';
const activities = [
  { name: 'Reading', icon: Book, gradient: 'from-blue-500 to-indigo-600', path: '/activities/reading' },
  { name: 'Weekly Planner', icon: Calendar, gradient: 'from-violet-500 to-purple-600', path: '/activities/weekly-planner' },
  { name: 'Drawing', icon: Palette, gradient: 'from-pink-500 to-rose-600', path: '/activities/drawing' },
  { name: 'HabEx', icon: Brain, gradient: 'from-amber-500 to-yellow-600', path: '/activities/habex' },
  { name: 'Checks', icon: CheckSquare, gradient: 'from-emerald-500 to-green-600', path: '/activities/checks' },
  { name: 'Stopwatch', icon: Timer, gradient: 'from-cyan-500 to-blue-600', path: '/activities/stopwatch' }, 
  { name: 'Meditation', icon: Book, gradient: 'from-violet-500 to-purple-600',path: '/activities/meditation'  },
  { name: 'Places', icon: Map, gradient: 'from-red-500 to-rose-600', path: '/activities/rexspots' },
  { name: 'Gaming', icon: GamepadIcon, gradient: 'from-indigo-500 to-purple-600', path: '/activities/gaming' }
];

const Activities = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-white/90">
      <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        {/* <BackgroundPatterns /> */}
      </div>
      
      <div className="relative min-h-screen z-10 px-6 pt-28 pb-16 backdrop-blur-[4px]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-16 text-center">
            Activities
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <ActivityCard
                key={activity.name}
                activity={activity}
                onClick={() => navigate(activity.path)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Activities;