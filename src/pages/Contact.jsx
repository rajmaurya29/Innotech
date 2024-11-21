import React, { useEffect, useRef } from 'react';
import ContactCard from '../components/ContactCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const ctaRef = useRef(null);

  const team = [
    {
      name: "Kunwar Ratnesh",
      role: "Team Lead & UI/UX Developer",
      bio: "Content creater & Front-end developer ",
      // image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      github: "https://github.com/johnsmith",
      linkedin: "https://linkedin.com/in/johnsmith",
      email: "john@bugbuster.com"
    },
    {
      name: "Praveen Singh",
      role: "UI/UX & Frontend Developer",
      bio: "Creative designer passionate about crafting beautiful and intuitive user experiences.",
      // image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      github: "https://github.com/ryancooper",
      linkedin: "https://linkedin.com/in/ryancooper",
      email: "ryan@bugbuster.com"
    },
    {
      name: "Raj Maurya",
      role: "Full Stack Developer",
      bio: "System architect specializing in high-performance and secure backend solutions.",
      // image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
      github: "https://github.com/alexchen",
      linkedin: "https://linkedin.com/in/alexchen",
      email: "alex@bugbuster.com"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power3.out",
        clearProps: "all"
      });

      // CTA section animation
      gsap.from(ctaRef.current, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse"
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        clearProps: "all"
      });
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div className="min-h-screen pt-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4" style={{fontFamily:"cursive",padding:"20px"}}>
           BugBusters
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get to know the talented individuals behind BugBuster who are passionate about creating amazing software solutions.
          </p>
        </div>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team.map((person, index) => (
            <ContactCard key={person.name} person={person} index={index} />
          ))}
        </div>

        <div ref={ctaRef} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-6">
            Have a question or want to work with us? We'd love to hear from you!
          </p>
          <a
            href="mailto:team@bugbuster.com"
            className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Send us a message
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;