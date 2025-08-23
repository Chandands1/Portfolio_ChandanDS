// src/components/About.jsx
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto py-20 px-6">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6 text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed text-gray-700">
              I'm a passionate Senior Java Developer with 4+ years of experience crafting robust, 
              scalable enterprise solutions. I thrive on transforming complex business requirements 
              into elegant, efficient code that drives real-world impact.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700">
              My expertise spans the full development lifecycle - from architectural design and 
              backend development to cloud deployment and optimization. I'm particularly passionate 
              about microservices architecture, performance optimization, and building systems that 
              can scale seamlessly with growing business needs.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              I believe in writing clean, maintainable code and am always eager to explore new 
              technologies that can solve problems more effectively. My approach combines technical 
              excellence with a deep understanding of business objectives.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {["Java", "Spring Boot", "Microservices", "AWS", "Docker", "Kubernetes"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 p-1 rounded-3xl">
              <div className="bg-white p-8 rounded-3xl text-center">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">4+</div>
                  <div className="text-gray-600 font-medium">Years of Experience</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Enterprise Applications</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Microservices Architecture</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Cloud Technologies</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Full-Stack Development</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}