import React, { useState } from 'react';
import SectionLayout from '../../components/SectionLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const stories = [
  {
    title: "The Last Leaf",
    author: "O. Henry",
    excerpt: "In Greenwich Village, an artist fights to save her friend's life with an extraordinary act of deception and sacrifice.",
    content: `In a little district west of Washington Square, the streets have run crazy and broken themselves into small strips called "places." In one of these streets is an old, old ivy-covered house where many artists lived.

    Two young artists, Sue and Johnsy, shared a studio apartment at the top of a three-story building. In November, a cold, unseen stranger, whom the doctors called Pneumonia, stalked about the colony, touching one here and there with his icy fingers...`,
    image: "https://images.unsplash.com/photo-1507371341162-763b5e419408?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "The Gift of the Magi",
    author: "O. Henry",
    excerpt: "A young couple sacrifices their most prized possessions to buy Christmas gifts for each other.",
    content: `One dollar and eighty-seven cents. That was all. And sixty cents of it was in pennies. Pennies saved one and two at a time by bulldozing the grocer and the vegetable man and the butcher until one's cheeks burned with the silent imputation of parsimony that such close dealing implied...`,
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "The Little Match Girl",
    author: "Hans Christian Andersen",
    excerpt: "On a cold New Year's Eve, a poor young girl tries to sell matches in the street.",
    content: `It was terribly cold and nearly dark on the last evening of the old year, and the snow was falling fast. In the cold and the darkness, a poor little girl, with bare head and naked feet, roamed through the streets...`,
    image: "https://images.unsplash.com/photo-1515281239448-2abe329fe5e5?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "The Monkey's Paw",
    author: "W.W. Jacobs",
    excerpt: "A mystical monkey's paw grants three wishes, but with devastating consequences.",
    content: `Without, the night was cold and wet, but in the small parlour of Laburnam Villa the blinds were drawn and the fire burned brightly. Father and son were at chess, the former, who possessed ideas about the game involving radical changes, putting his king into such sharp and unnecessary perils...`,
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "The Tell-Tale Heart",
    author: "Edgar Allan Poe",
    excerpt: "A murderer carefully plans his crime but is undone by his own guilty conscience.",
    content: `True! --nervous --very, very dreadfully nervous I had been and am; but why will you say that I am mad? The disease had sharpened my senses --not destroyed --not dulled them. Above all was the sense of hearing acute...`,
    image: "https://images.unsplash.com/photo-1509909756405-be0199881695?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "The Necklace",
    author: "Guy de Maupassant",
    excerpt: "A woman borrows a necklace from a friend, only to lose it and spend years repaying its worth.",
    content: `She was one of those pretty and charming girls born, as though fate had blundered over her, into a family of artisans. She had no marriage portion, no expectations, no means of getting known, understood, loved, and wedded by a man of wealth and distinction...`,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1000"
  }
];

const Stories = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <SectionLayout
      title="Short Stories"
      subtitle="Immerse yourself in captivating tales from renowned authors"
      gradient="bg-gradient-to-br from-purple-600 to-pink-700"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group cursor-pointer"
            onClick={() => setSelectedStory(story)}
          >
            <div className="relative h-96 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90" />
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">{story.title}</h3>
                <p className="text-white/80 text-sm mb-3">by {story.author}</p>
                <p className="text-white/90 line-clamp-3">{story.excerpt}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedStory(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedStory.image}
                  alt={selectedStory.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                <button
                  onClick={() => setSelectedStory(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedStory.title}
                </h2>
                <p className="text-gray-600 mb-6">by {selectedStory.author}</p>
                <div className="prose prose-lg">
                  {selectedStory.content.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionLayout>
  );
};

export default Stories;