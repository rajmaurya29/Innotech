import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const Login = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const bgShapesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate background shapes with more dynamic effects
      gsap.set('.bg-shape', { scale: 0, opacity: 0, rotation: 0 });
      
      const tl = gsap.timeline();
      
      // Enhanced background animation
      tl.to('.bg-shape', {
        scale: 1,
        opacity: 0.8,
        rotation: "random(-180, 180)",
        duration: 0,
        stagger: {
          each: 0.2,
          ease: "power2.out"
        },
        ease: "elastic.out(1, 0.8)"
      });

      // Floating animation for background shapes
      gsap.to('.bg-shape', {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-15, 15)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.5,
          from: "random"
        }
      });

      // Form elements animation
      tl.from('.form-element', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      }, "-=0.5");

      // Subtle pulse animation for the login button
      gsap.to('.login-button', {
        scale: 1.02,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

    return () => ctx.revert();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    
    const tl = gsap.timeline({
      onComplete: () => navigate('/activities')
    });

    // Enhanced exit animation
    tl.to('.form-element', {
      y: -30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.inOut"
    })
    .to('.bg-shape', {
      scale: 2,
      opacity: 0,
      rotation: "random(-360, 360)",
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.inOut"
    }, "-=0.4");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50">
      {/* Enhanced background shapes */}
      <div ref={bgShapesRef} className="absolute inset-0 -z-10">
        <div className="bg-shape absolute top-[10%] left-[15%] w-72 h-72 bg-purple-400/20 rounded-full blur-3xl" />
        <div className="bg-shape absolute bottom-[20%] right-[10%] w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />
        <div className="bg-shape absolute top-[40%] left-[60%] w-80 h-80 bg-pink-400/20 rounded-full blur-3xl" />
        <div className="bg-shape absolute bottom-[60%] right-[50%] w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
      </div>
      
      <div className="w-full max-w-md px-6">
        <form
          ref={formRef}
          onSubmit={handleLogin}
          className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl px-8 pt-8 pb-8 mb-4 space-y-6 border border-white/20"
        >
          <div className="form-element text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Welcome Back
            </h2>
            <p className="text-gray-600 mt-3">Sign in to continue your journey</p>
          </div>
          
          <div className="form-element space-y-2">
            <label className="block text-gray-700 text-sm font-semibold">
              Email
            </label>
            <input
              className="w-full py-3 px-4 bg-white/50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
              type="email"
              placeholder="your@email.com"
            />
          </div>
          
          <div className="form-element space-y-2">
            <label className="block text-gray-700 text-sm font-semibold">
              Password
            </label>
            <input
              className="w-full py-3 px-4 bg-white/50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
              type="password"
              placeholder="••••••••"
            />
          </div>
          
          <div className="form-element pt-4">
            <button
              className="login-button w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 hover:shadow-lg hover:from-indigo-700 hover:to-purple-700"
              type="submit"
            >
              Sign In
            </button>
          </div>
          
          <div className="form-element text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors">
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;