// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const links = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "footer" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = links.map(link => document.getElementById(link.id));
      const scrollPos = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section && section.offsetTop <= scrollPos && 
            section.offsetTop + section.offsetHeight > scrollPos) {
          setActiveSection(links[index].id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const offset = 80; // navbar height
    if (element) {
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  };

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg' 
          : 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <motion.h1 
          className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Chandan DS
        </motion.h1>
        
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-6 xl:gap-8 font-medium">
            {links.map((link, index) => (
              <motion.li 
                key={link.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 relative group ${
                    activeSection === link.id ? 'text-indigo-600 dark:text-indigo-400' : ''
                  }`}
                  aria-label={`Navigate to ${link.name} section`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 ${
                    activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              </motion.li>
            ))}
          </ul>
          
          {/* Dark Mode Toggle */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"/>
              </svg>
            )}
          </motion.button>
          
          {/* Download Resume Button */}
          <motion.a
            href="/Resume_ChandanDS.pdf"
            download="Resume_ChandanDS.pdf"
            className="px-4 xl:px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm xl:text-base"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Download resume"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 15.577l-3.538-3.538 1.061-1.061L11 12.455V3h2v9.455l1.477-1.477 1.061 1.061L12 15.577z" fill="currentColor"/>
              <path d="M3 19h18v2H3v-2z" fill="currentColor"/>
            </svg>
            Resume
          </motion.a>
        </div>
        
        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle mobile menu"
        >
          <div className="space-y-1">
            <motion.div 
              className="w-5 h-0.5 bg-gray-600 dark:bg-gray-300"
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            />
            <motion.div 
              className="w-5 h-0.5 bg-gray-600 dark:bg-gray-300"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.div 
              className="w-5 h-0.5 bg-gray-600 dark:bg-gray-300"
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            />
          </div>
        </motion.button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t dark:border-gray-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 sm:px-6 py-4 space-y-2">
              {links.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left py-3 px-4 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all ${
                    activeSection === link.id ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400' : ''
                  }`}
                  whileHover={{ x: 10 }}
                >
                  {link.name}
                </motion.button>
              ))}
              
              {/* Mobile Dark Mode Toggle */}
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                className="block w-full text-left py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                whileHover={{ x: 10 }}
              >
                <div className="flex items-center gap-3">
                  {darkMode ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"/>
                    </svg>
                  )}
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </div>
              </motion.button>
              
              {/* Mobile Download Resume Button */}
              <motion.a
                href="/Resume_ChandanDS.pdf"
                download="Resume_ChandanDS.pdf"
                className="block w-full py-3 px-4 mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-center font-medium hover:shadow-lg transition-all duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="flex items-center justify-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 15.577l-3.538-3.538 1.061-1.061L11 12.455V3h2v9.455l1.477-1.477 1.061 1.061L12 15.577z" fill="currentColor"/>
                    <path d="M3 19h18v2H3v-2z" fill="currentColor"/>
                  </svg>
                  Download Resume
                </div>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}