import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, User } from 'lucide-react';
import { gsap } from 'gsap';

const stories = [
  {
    title: "The Last Leaf",
    author: "O. Henry",
    readTime: "15 min",
    preview: "In a small Greenwich Village studio, an artist fights for her life against pneumonia, finding hope in the most unexpected place - the last leaf on a vine.",
    image: "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "The Gift of the Magi",
    author: "O. Henry",
    readTime: "20 min",
    preview: "A heartwarming tale of a young couple who make sacrifices to buy Christmas gifts for each other, only to discover the true meaning of love.",
    image: "https://images.unsplash.com/photo-1512418490979-92798cec1380?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "The Necklace",
    author: "Guy de Maupassant",
    readTime: "25 min",
    preview: "A story about pride, appearances, and the price of vanity, following a woman who borrows a necklace she cannot afford to lose.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Stories = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.story-card', {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div ref={containerRef} className="max-w-7xl mx-auto pt-16">
        <button
          onClick={() => navigate('/activities/reading')}
          className="flex items-center text-gray-600 hover:text-gray-800 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Reading
        </button>

        <h1 className="text-4xl font-bold text-gray-800 mb-12">Short Stories</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="story-card bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{story.title}</h2>
                <p className="text-gray-600 mb-4">{story.preview}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    {story.author}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {story.readTime}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stories;