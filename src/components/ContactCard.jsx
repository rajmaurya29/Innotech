import React, { useRef, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactCard = ({ person, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse"
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        delay: index * 0.2,
        ease: "power3.out",
        clearProps: "all"
      });
    });

    return () => ctx.revert(); // Cleanup
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
    >
      <div className="flex flex-col items-center">
        <div className="w-24 h-15 rounded-full overflow-hidden mb-4">
          {/* <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover"
          /> */}
        </div>
        <h3 className="text-xl font-bold text-gray-100 mb-2">{person.name}</h3>
        <p className="text-cyan-400 mb-4">{person.role}</p>
        <p className="text-gray-300 text-center mb-6">{person.bio}</p>
        <div className="flex space-x-4">
          <a
            href={person.github}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={person.linkedin}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href={`mailto:${person.email}`}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;