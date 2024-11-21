import React from 'react';
import SectionLayout from '../../components/SectionLayout';
import { motion } from 'framer-motion';

const biographies = [
  {
    name: "Marie Curie",
    achievement: "First person to win Nobel Prize twice",
    excerpt: "A pioneering physicist and chemist who conducted groundbreaking research on radioactivity.",
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&q=80&w=1000"
  },
  {
    name: "Albert Einstein",
    achievement: "Theory of Relativity",
    excerpt: "Developed the theory of relativity, one of the two pillars of modern physics.",
    image: "https://plus.unsplash.com/premium_photo-1676750395664-3ac0783ae2c2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Leonardo da Vinci",
    achievement: "Renaissance Polymath",
    excerpt: "Italian Renaissance polymath whose areas of interest included invention, drawing, painting, sculpture.",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=1000"
  },
  {
    name: "Nelson Mandela",
    achievement: "Anti-apartheid Revolutionary",
    excerpt: "South African anti-apartheid revolutionary who served as President of South Africa.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000"
  },
  {
    name: "Mother Teresa",
    achievement: "Nobel Peace Prize Winner",
    excerpt: "Roman Catholic nun who devoted her life to serving the poor and destitute around the world.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1000"
  },
  {
    name: "Mahatma Gandhi",
    achievement: "Father of the Nation",
    excerpt: "Indian lawyer, anti-colonial nationalist who employed nonviolent resistance to lead India's independence movement.",
    image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&q=80&w=1000"
  }
];

const Biographies = () => {
  return (
    <SectionLayout
      title="Biographies"
      subtitle="Stories of remarkable individuals who changed the world"
      gradient="bg-gradient-to-br from-emerald-600 to-teal-700"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {biographies.map((bio, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden group"
          >
            <div className="relative h-64">
              <img
                src={bio.image}
                alt={bio.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-1">{bio.name}</h3>
                <p className="text-emerald-300 text-sm">{bio.achievement}</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed">{bio.excerpt}</p>
              <button className="mt-4 text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
                Read more →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Biographies;