import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import gsap from 'gsap';

const Home = () => {
  const navigate = useNavigate();
  const backgroundRef = useRef(null);

  useEffect(() => {
    const moveBackground = (e) => {
      if (backgroundRef.current) {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;
        
        gsap.to(backgroundRef.current, {
          x: xPos,
          y: yPos,
          duration: 1,
          ease: 'power2.out'
        });
      }
    };

    window.addEventListener('mousemove', moveBackground);
    return () => window.removeEventListener('mousemove', moveBackground);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-white to-blue-50">
      <div ref={backgroundRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-violet-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-grow flex items-center justify-center px-4 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Brain className="text-indigo-600 w-12 h-12 mr-3" />
              <h1 className="text-6xl font-bold text-gray-900 tracking-tight" style={{fontFamily:"cursive"}}>
                MindBug
              </h1>
            </div>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Your personal study companion for better focus, time management, and mental wellness
            </p>

            <motion.button
              onClick={() => navigate('/activities')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-xl hover:bg-indigo-700 transition-all duration-300"
              style={{ backgroundColor: 'rgb(103, 15, 174)' }}
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </main>

        <footer className="relative z-10 w-full py-8 border-t border-gray-200 mt-auto bg-white/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-7xl mx-auto px-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {[
                {
                  name: "Kunwar Ratnesh",
                  role: "Team Lead & UI/UX Developer",
                  social: {
                    github: "#",
                    linkedin: "#",
                    twitter: "#"
                  }
                },
                {
                  name: "Praveen Singh",
                  role: "UI/UX & Frontend Developer",
                  social: {
                    github: "#",
                    linkedin: "#",
                    mail: "#"
                  }
                },
                {
                  name: "Raj Maurya",
                  role: "Full Stack Developer",
                  social: {
                    github: "https://github.com/rajmaurya29/",
                    linkedin: "#",
                    twitter: "#"
                  }
                }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="text-center p-4 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-gray-900 font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{member.role}</p>
                  <div className="flex justify-center space-x-4">
                    {member.social.github && (
                      <a href={member.social.github} className="text-gray-600 hover:text-indigo-600 transition-colors">
                        <Github size={18} />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-gray-600 hover:text-indigo-600 transition-colors">
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-gray-600 hover:text-indigo-600 transition-colors">
                        <Twitter size={18} />
                      </a>
                    )}
                    {member.social.mail && (
                      <a href={member.social.mail} className="text-gray-600 hover:text-indigo-600 transition-colors">
                        <Mail size={18} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-6 text-gray-500 text-sm">
              © {new Date().getFullYear()} MindBug. All rights reserved.
            </div>
          </motion.div>
        </footer>
      </div>
    </div>
  );
};

export default Home;