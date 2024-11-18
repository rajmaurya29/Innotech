import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Quote } from 'lucide-react';
import { gsap } from 'gsap';

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Motivation"
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
    category: "Life"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "Dreams"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "Success"
  }
];

const Quotes = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.quote-card', {
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
          onClick={() => navigate('/reading')}
          className="flex items-center text-gray-600 hover:text-gray-800 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Reading
        </button>

        <h1 className="text-4xl font-bold text-gray-800 mb-12">Inspiring Quotes</h1>

        <div className="grid gap-6">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="quote-card bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <Quote className="text-indigo-500 flex-shrink-0" size={24} />
                <div>
                  <p className="text-xl text-gray-800 font-medium mb-3">{quote.text}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600">— {quote.author}</p>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                      {quote.category}
                    </span>
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

export default Quotes;