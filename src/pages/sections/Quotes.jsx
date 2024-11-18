import React from 'react';
import SectionLayout from '../../components/SectionLayout';
import { motion } from 'framer-motion';

const quotes = [
  {
    text: "Be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
    image: "https://images.unsplash.com/photo-1506755855567-92ff770e8d00?auto=format&fit=crop&q=80&w=1000"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    image: "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?auto=format&fit=crop&q=80&w=1000"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?auto=format&fit=crop&q=80&w=1000"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=1000"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=1000"
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    image: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?auto=format&fit=crop&q=80&w=1000"
  }
];

const Quotes = () => {
  return (
    <SectionLayout
      title="Inspiring Quotes"
      subtitle="Words that inspire, motivate, and transform"
      gradient="bg-gradient-to-br from-blue-600 to-indigo-700"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.map((quote, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <img
              src={quote.image}
              alt={quote.author}
              className="w-full h-72 object-cover rounded-xl"
            />
            
            <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-medium mb-2">"{quote.text}"</p>
              <p className="text-white/80">- {quote.author}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Quotes;