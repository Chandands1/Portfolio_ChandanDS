// src/App.jsx
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoadingSpinner from './components/LoadingSpinner';
import BackToTop from './components/BackToTop';
import ScrollProgress from './components/ScrollProgress';

// Lazy load components for better performance
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }

    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Update localStorage and document class when theme changes
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ErrorBoundary>
      <div className={`bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-x-hidden ${darkMode ? 'dark' : ''}`}>
        <ScrollProgress />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        
        <Suspense fallback={<LoadingSpinner />}>
          <About />
          <Skills />
          <Experience />
          <Education />
          <Footer />
        </Suspense>
        
        <BackToTop />
      </div>
    </ErrorBoundary>
  );
}