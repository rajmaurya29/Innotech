import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const drawings = [
  {
    title: "Zen Garden",
    description: "A peaceful pattern of curved lines and circles",
    steps: [
      "Draw a large circle in the center",
      "Add wavy lines around it, like ripples in water",
      "Draw smaller circles between the waves",
      "Add small dots or pebbles around",
      "Optional: Add simple flower shapes"
    ],
    difficulty: "Easy",
    timeEstimate: "10-15 minutes",
    theme: "from-teal-500 to-emerald-600"
  },
  {
    title: "Mandala Flowers",
    description: "Simple repeating flower patterns",
    steps: [
      "Start with a center point",
      "Draw 6-8 large petals around the center",
      "Add smaller petals between the large ones",
      "Draw circles in the center",
      "Add dots and patterns inside petals"
    ],
    difficulty: "Easy",
    timeEstimate: "15-20 minutes",
    theme: "from-purple-500 to-pink-600"
  },
  {
    title: "Ocean Waves",
    description: "Flowing lines creating a peaceful seascape",
    steps: [
      "Draw horizontal curved lines for waves",
      "Add smaller curves above each wave",
      "Draw simple fish shapes",
      "Add bubbles using circles",
      "Optional: Draw seaweed or starfish"
    ],
    difficulty: "Easy",
    timeEstimate: "10-15 minutes",
    theme: "from-blue-500 to-cyan-600"
  },
  {
    title: "Forest Doodles",
    description: "Simple tree and nature patterns",
    steps: [
      "Draw triangle shapes for trees",
      "Add curved lines for tree trunks",
      "Draw simple cloud shapes above",
      "Add small flowers and grass below",
      "Optional: Add birds using curved lines"
    ],
    difficulty: "Easy",
    timeEstimate: "15-20 minutes",
    theme: "from-green-500 to-lime-600"
  },
  {
    title: "Abstract Shapes",
    description: "Relaxing geometric patterns",
    steps: [
      "Draw various sized circles",
      "Add triangles between circles",
      "Connect shapes with curved lines",
      "Fill some shapes with simple patterns",
      "Add dots and small details"
    ],
    difficulty: "Easy",
    timeEstimate: "10-15 minutes",
    theme: "from-indigo-500 to-violet-600"
  },
  {
    title: "Cloud Dreams",
    description: "Whimsical cloud and star patterns",
    steps: [
      "Draw cloud shapes using curved lines",
      "Add stars of different sizes",
      "Draw swirling lines between clouds",
      "Add small dots for starlight",
      "Optional: Add a crescent moon"
    ],
    difficulty: "Easy",
    timeEstimate: "10-15 minutes",
    theme: "from-rose-500 to-pink-600"
  }
];

const Drawing = () => {
  const navigate = useNavigate();
  const [currentDrawing, setCurrentDrawing] = useState(0);

  const nextDrawing = () => {
    setCurrentDrawing((prev) => (prev + 1) % drawings.length);
  };

  const prevDrawing = () => {
    setCurrentDrawing((prev) => (prev - 1 + drawings.length) % drawings.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.button
          onClick={() => navigate('/activities')}
          className="flex items-center text-gray-700 hover:text-gray-900 transition-colors mb-8 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-sm hover:shadow-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Activities
        </motion.button>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-4 text-gray-900"
        >
          Relaxing Drawing Exercises
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-600 mb-12"
        >
          Simple and calming drawings to help you relax and express creativity
        </motion.p>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDrawing}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${drawings[currentDrawing].theme}`} />
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {drawings[currentDrawing].title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {drawings[currentDrawing].description}
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Steps:</h3>
                  <ol className="space-y-3">
                    {drawings[currentDrawing].steps.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${drawings[currentDrawing].theme} text-white flex items-center justify-center text-sm mr-3">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                  <div>Difficulty: {drawings[currentDrawing].difficulty}</div>
                  <div>Time: {drawings[currentDrawing].timeEstimate}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
            <button
              onClick={prevDrawing}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
            <button
              onClick={nextDrawing}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {drawings.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentDrawing(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentDrawing === index
                  ? 'bg-gray-800'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drawing;