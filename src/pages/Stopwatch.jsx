import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw } from 'lucide-react';
import BackButton from '../components/BackButton';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const formatTime = useCallback((time) => {
    const minutes = Math.floor(time / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const centiseconds = time % 100;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
  }, []);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const handleLap = () => {
    setLaps([...laps, time]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 p-6">
      <BackButton />
      <div className="max-w-2xl mx-auto pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
            Stopwatch
          </h1>

          {/* Timer Display */}
          <div className="text-7xl font-mono text-center mb-12 font-bold text-gray-800">
            {formatTime(time)}
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-6 mb-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartStop}
              className={`p-4 rounded-full ${
                isRunning
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-green-500 hover:bg-green-600'
              } text-white shadow-lg`}
            >
              {isRunning ? <Pause size={24} /> : <Play size={24} />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleReset}
              className="p-4 rounded-full bg-gray-500 hover:bg-gray-600 text-white shadow-lg"
            >
              <RotateCcw size={24} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLap}
              disabled={!isRunning}
              className="px-6 py-4 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Lap
            </motion.button>
          </div>

          {/* Laps */}
          {laps.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">Laps</h2>
              <div className="space-y-2 max-h-60 overflow-auto">
                {laps.map((lapTime, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
                  >
                    <span className="text-gray-600">Lap {laps.length - index}</span>
                    <span className="font-mono text-gray-800">{formatTime(lapTime)}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Stopwatch;