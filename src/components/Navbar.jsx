import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Login', path: '/login', icon: '🔐' },
    { name: 'Activities', path: '/activities', icon: '📋' },
    { name: 'Contact', path: '/contact', icon: '📧' },
  ];

  return (
    <nav
  className="backdrop-blur-sm shadow-lg border-b border-gray-800 text-gray-100 fixed w-full top-0 z-50"
  style={{ backgroundColor: 'rgba(17, 3, 99, 0.678)'}}
>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-xl font-bold"
          >
            <span className="text-2xl">🐞</span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" style={{fontFamily:"cursive"}}>
              MindBug
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ease-in-out hover:scale-105 ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <span className="flex items-center space-x-1.5">
                  <span className="text-base">{item.icon}</span>
                  <span>{item.name}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-base">{item.icon}</span>
                  <span>{item.name}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;