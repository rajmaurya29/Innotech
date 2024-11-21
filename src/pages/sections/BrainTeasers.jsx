import React from 'react';
import SectionLayout from '../../components/SectionLayout';
import { motion } from 'framer-motion';

const brainTeasers = [
  {
    question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "An echo",
    image: "https://images.unsplash.com/photo-1620098255118-a5e1a0ee92b6?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    question: "What has keys, but no locks; space, but no room; and you can enter, but not go in?",
    answer: "A keyboard",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=1000"
  },
  {
    question: "The more you take, the more you leave behind. What am I?",
    answer: "Footsteps",
    image: "https://images.unsplash.com/photo-1461695008884-244cb4543d74?auto=format&fit=crop&q=80&w=1000"
  },
  {
    question: "What has cities, but no houses; forests, but no trees; and rivers, but no water?",
    answer: "A map",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    question: "What is always in front of you but can't be seen?",
    answer: "The future",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
  },
  {
    question: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. I have roads, but no cars. What am I?",
    answer: "A globe",
    image: "https://images.unsplash.com/photo-1589519160732-57fc498494f8?auto=format&fit=crop&q=80&w=1000"
  }
];

const BrainTeasers = () => {
  return (
    <SectionLayout
      title="Brain Teasers"
      subtitle="Challenge your mind with these intriguing puzzles"
      gradient="bg-gradient-to-br from-cyan-600 to-blue-700"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brainTeasers.map((teaser, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
          >
            <div className="relative h-48">
              <img
                src={teaser.image}
                alt="Brain Teaser"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
            </div>
            <div className="p-6">
              <p className="text-lg font-medium text-gray-900 mb-4">{teaser.question}</p>
              <div className="overflow-hidden">
                <p className="text-cyan-600 font-medium transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  Answer: {teaser.answer}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default BrainTeasers;