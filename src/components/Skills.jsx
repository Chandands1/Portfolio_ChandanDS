// src/components/Skills.jsx
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = {
    Backend: {
      items: ["Java 8–17", "Spring Boot", "Hibernate JPA", "Microservices", "Spring Cloud", "REST APIs"],
      color: "from-blue-400 to-indigo-600"
    },
    "Cloud & DevOps": {
      items: ["AWS", "Docker", "Kubernetes", "Jenkins", "Git", "Kafka"],
      color: "from-purple-400 to-pink-600"
    },
    Database: {
      items: ["MySQL", "MongoDB", "Redis", "SQL Optimization"],
      color: "from-green-400 to-teal-600"
    },
    Testing: {
      items: ["JUnit", "Mockito", "Cucumber", "Postman", "SonarQube"],
      color: "from-orange-400 to-red-600"
    },
    Other: {
      items: ["System Design", "Scalability", "Linux", "Shell Scripting"],
      color: "from-yellow-400 to-orange-600"
    }
  };

  return (
    <section id="skills" className="bg-gradient-to-br from-gray-50 to-indigo-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, { items, color }], index) => (
            <motion.div
              key={category}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${color} mb-6`}>
                  <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                </div>
                <h3 className="text-xl font-bold mb-6 text-gray-800">{category}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}