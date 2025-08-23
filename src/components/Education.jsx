// src/components/Education.jsx
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        
        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <div className="relative p-10 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="inline-flex p-4 mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl">
              <div className="w-8 h-8 bg-white rounded-lg opacity-90"></div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Bachelor of Engineering
            </h3>
            <h4 className="text-xl text-indigo-600 font-semibold mb-4">
              Computer Science Engineering
            </h4>
            <p className="text-lg text-gray-600 mb-4">
              Visvesvaraya Technological University (VTU)
            </p>
            
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full">
              <span className="text-green-700 font-semibold">GPA: 8.4/10</span>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}