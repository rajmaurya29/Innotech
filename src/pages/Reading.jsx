import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Quote, 
  BookText, 
  History, 
  Laugh, 
  Lightbulb, 
  Brain, 
  Heart, 
  Sparkles 
} from 'lucide-react';
import { motion } from 'framer-motion';

const readingCategories = [
  {
    name: 'Quotes',
    icon: Quote,
    description: 'Explore inspiring and thought-provoking quotes',
    gradient: 'from-blue-600 to-indigo-700',
    bgLight: 'bg-blue-50'
  },
  {
    name: 'Stories',
    icon: BookText,
    description: 'Immerse yourself in captivating short stories',
    gradient: 'from-purple-600 to-pink-700',
    bgLight: 'bg-purple-50'
  },
  {
    name: 'Biographies',
    icon: History,
    description: 'Journey through inspiring life stories',
    gradient: 'from-emerald-600 to-teal-700',
    bgLight: 'bg-emerald-50'
  },
  {
    name: 'Jokes',
    icon: Laugh,
    description: 'Lighten your mood with humor',
    gradient: 'from-amber-600 to-orange-700',
    bgLight: 'bg-amber-50'
  },
  {
    name: 'Paheli',
    icon: Lightbulb,
    description: 'Challenge yourself with riddles',
    gradient: 'from-rose-600 to-red-700',
    bgLight: 'bg-rose-50'
  },
  {
    name: 'Brain Teasers',
    icon: Brain,
    description: 'Sharpen your mind with puzzles',
    gradient: 'from-cyan-600 to-blue-700',
    bgLight: 'bg-cyan-50'
  },
  {
    name: 'Dohe',
    icon: Heart,
    description: 'Timeless wisdom in Hindi verses',
    gradient: 'from-violet-600 to-purple-700',
    bgLight: 'bg-violet-50'
  },
  {
    name: 'Shayari',
    icon: Sparkles,
    description: 'Beautiful Urdu poetry collection',
    gradient: 'from-fuchsia-600 to-pink-700',
    bgLight: 'bg-fuchsia-50'
  }
].map(category => ({
  ...category,
  path: `/activities/reading/${category.name.toLowerCase()}`
}));

const Reading = () => {
  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 opacity-70" />
      
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-24">
        <motion.button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-700 hover:text-gray-900 transition-colors mb-8 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-sm hover:shadow-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Activities
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700 mb-4">
            Reading Corner
          </h1>
          <p className="text-gray-700 text-xl font-medium">Explore a world of words, wisdom, and wonder</p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {readingCategories.map((category) => (
            <motion.button
              key={category.name}
              variants={item}
              onClick={() => navigate(category.path)}
              className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${category.bgLight}`}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`h-3 w-full bg-gradient-to-r ${category.gradient}`} />
              
              <div className="p-8">
                <motion.div
                  className={`mx-auto w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} 
                    flex items-center justify-center text-white shadow-lg mb-6`}
                  whileHover={{ 
                    rotate: [0, -10, 10, -5, 5, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <category.icon size={32} />
                </motion.div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {category.name}
                </h2>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Reading;