// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "footer" },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-lg' 
          : 'bg-white/70 backdrop-blur-md shadow-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1 
          className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Chandan DS
        </motion.h1>
        
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 font-medium">
            {links.map((link, index) => (
              <motion.li 
                key={link.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={`#${link.id}`}
                  className="hover:text-indigo-600 transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </motion.li>
            ))}
          </ul>
          
          {/* Download Resume Button */}
          <motion.a
            href="/Resume_ChandanDS.pdf"
            download="Resume_ChandanDS.pdf"
            className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15.577l-3.538-3.538 1.061-1.061L11 12.455V3h2v9.455l1.477-1.477 1.061 1.061L12 15.577z" fill="currentColor"/>
              <path d="M3 19h18v2H3v-2z" fill="currentColor"/>
            </svg>
            Resume
          </motion.a>
        </div>
        
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors"
          whileTap={{ scale: 0.95 }}
        >
          <div className="space-y-1">
            <motion.div 
              className="w-5 h-0.5 bg-gray-600"
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            />
            <motion.div 
              className="w-5 h-0.5 bg-gray-600"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.div 
              className="w-5 h-0.5 bg-gray-600"
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            />
          </div>
        </motion.button>
      </div>
      
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="md:hidden bg-white/95 backdrop-blur-md border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-2">
              {links.map((link) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  className="block py-3 px-4 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all"
                  onClick={() => setMenuOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}