import React from 'react';
import SectionLayout from '../../components/SectionLayout';
import { motion } from 'framer-motion';
import { Laugh } from 'lucide-react';

const jokes = [
  {
    setup: "Why don't scientists trust atoms?",
    punchline: "Because they make up everything!",
    category: "Science",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1000"
  },
  {
    setup: "What did the grape say when it got stepped on?",
    punchline: "Nothing, it just let out a little wine!",
    category: "Food",
    image: "https://images.unsplash.com/photo-1596363505729-4190a9506133?auto=format&fit=crop&q=80&w=1000"
  },
  {
    setup: "Why did the scarecrow win an award?",
    punchline: "Because he was outstanding in his field!",
    category: "Wordplay",
    image: "https://images.unsplash.com/photo-1508896694512-1eade558679c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    setup: "What do you call a bear with no teeth?",
    punchline: "A gummy bear!",
    category: "Animals",
    image: "https://images.unsplash.com/photo-1525382455947-f319bc05fb35?auto=format&fit=crop&q=80&w=1000"
  },
  {
    setup: "Why don't eggs tell jokes?",
    punchline: "They'd crack up!",
    category: "Food",
    image: "https://images.unsplash.com/photo-1491524062933-cb0289261700?auto=format&fit=crop&q=80&w=1000"
  },
  {
    setup: "What did one wall say to the other wall?",
    punchline: "I'll meet you at the corner!",
    category: "Wordplay",
    image: "https://images.unsplash.com/photo-1517582082532-16a092d47074?auto=format&fit=crop&q=80&w=1000"
  }
];

const Jokes = () => {
  return (
    <SectionLayout
      title="Jokes"
      subtitle="Lighten up your day with these fun jokes"
      gradient="bg-gradient-to-br from-amber-600 to-orange-700"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jokes.map((joke, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden group"
          >
            <div className="relative h-48">
              <img
                src={joke.image}
                alt={joke.category}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                <Laugh className="text-amber-600" size={24} />
              </div>
            </div>
            <div className="p-6">
              <span className="text-xs font-medium text-amber-600 uppercase tracking-wider">
                {joke.category}
              </span>
              <p className="text-lg font-medium text-gray-900 mt-2 mb-4">{joke.setup}</p>
              <div className="overflow-hidden">
                <p className="text-gray-600 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  {joke.punchline}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Jokes;