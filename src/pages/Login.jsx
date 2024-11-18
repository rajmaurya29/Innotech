import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

export default function Login() {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const bgShapesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Animate background shapes
      tl.from('.bg-shape', {
        scale: 0,
        opacity: 0,
        rotation: 180,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)"
      });

      // Animate form elements
      tl.from('.form-element', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=0.5");
    });

    return () => ctx.revert();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Create exit animation
    const tl = gsap.timeline({
      onComplete: () => navigate('/activities')
    });

    tl.to(formRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut"
    })
    .to('.bg-shape', {
      scale: 1.5,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.inOut"
    }, "-=0.3");
  };

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center relative overflow-hidden">
      <div ref={bgShapesRef} className="absolute inset-0 -z-10">
        <div className="bg-shape absolute top-20 left-20 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl" />
        <div className="bg-shape absolute bottom-20 right-20 w-64 h-64 bg-indigo-300/20 rounded-full blur-3xl" />
        <div className="bg-shape absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl" />
      </div>
      
      <div className="w-full max-w-md">
        <form
          ref={formRef}
          onSubmit={handleLogin}
          className="bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl px-8 pt-8 pb-8 mb-4 space-y-6"
        >
          <div className="form-element text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-gray-600 mt-2">Sign in to continue your journey</p>
          </div>
          
          <div className="form-element">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              className="appearance-none rounded-lg w-full py-3 px-4 bg-white/50 border border-gray-300 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              type="email"
              placeholder="your@email.com"
            />
          </div>
          
          <div className="form-element">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              className="appearance-none rounded-lg w-full py-3 px-4 bg-white/50 border border-gray-300 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              type="password"
              placeholder="••••••••"
            />
          </div>
          
          <div className="form-element">
            <button
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-[1.02]"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}