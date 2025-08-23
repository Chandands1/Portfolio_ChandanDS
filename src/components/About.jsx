// src/components/About.jsx
import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const expertise = [
    { name: "Enterprise Applications", icon: "🏢" },
    { name: "Microservices Architecture", icon: "🔧" },
    { name: "Cloud Technologies", icon: "☁️" },
    { name: "Performance Optimization", icon: "⚡" }
  ];

  const technologies = ["Java", "Spring Boot", "Microservices", "AWS", "Docker", "Kubernetes"];

  return (
    <section id="about" className="max-w-7xl mx-auto py-16 sm:py-20 px-4 sm:px-6">
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="space-y-4 sm:space-y-6 text-left order-2 lg:order-1"
            variants={itemVariants}
          >
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              I'm a passionate Senior Java Developer with 4+ years of experience crafting robust, 
              scalable enterprise solutions. I thrive on transforming complex business requirements 
              into elegant, efficient code that drives real-world impact.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              My expertise spans the full development lifecycle - from architectural design and 
              backend development to cloud deployment and optimization. I'm particularly passionate 
              about microservices architecture, performance optimization, and building systems that 
              can scale seamlessly with growing business needs.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              I believe in writing clean, maintainable code and am always eager to explore new 
              technologies that can solve problems more effectively. My approach combines technical 
              excellence with a deep understanding of business objectives.
            </p>

            <div className="pt-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Core Technologies</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-3 sm:px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium hover:scale-105 transition-transform"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: technologies.indexOf(tech) * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative order-1 lg:order-2"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 p-1 rounded-3xl shadow-xl">
              <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl">
                <div className="text-center mb-6">
                  <div className="text-4xl sm:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">4+</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">Years of Experience</div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">Areas of Expertise</h3>
                  {expertise.map((item, index) => (
                    <motion.div 
                      key={item.name}
                      className="flex items-center gap-3 text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-xl flex-shrink-0" role="img" aria-label={item.name}>
                        {item.icon}
                      </span>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}