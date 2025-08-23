// src/components/Skills.jsx
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      category: "Backend Development",
      items: ["Java 8-17", "Spring Boot", "Hibernate JPA", "Microservices", "Spring Cloud", "REST APIs"],
      color: "from-blue-500 to-indigo-600",
      icon: "⚙️",
      description: "Server-side development and architecture"
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "Kubernetes", "Jenkins", "Git", "Apache Kafka"],
      color: "from-purple-500 to-pink-600",
      icon: "☁️",
      description: "Cloud infrastructure and deployment"
    },
    {
      category: "Database & Caching",
      items: ["MySQL", "MongoDB", "Redis", "SQL Optimization", "Database Design"],
      color: "from-green-500 to-teal-600",
      icon: "💾",
      description: "Data storage and management solutions"
    },
    {
      category: "Testing & Quality",
      items: ["JUnit", "Mockito", "Cucumber", "Postman", "SonarQube", "TDD"],
      color: "from-orange-500 to-red-600",
      icon: "🧪",
      description: "Code quality and testing frameworks"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            variants={cardVariants}
          >
            Skills & Expertise
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
            variants={cardVariants}
          >
            A comprehensive toolkit for building robust, scalable enterprise applications
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {skillCategories.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                className="group relative"
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${skillGroup.color} shadow-lg`}>
                      <span className="text-2xl" role="img" aria-label={skillGroup.category}>
                        {skillGroup.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        {skillGroup.category}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {skillGroup.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        className="text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/30 dark:hover:to-purple-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all cursor-default"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Section */}
          <motion.div
            className="mt-12 text-center"
            variants={cardVariants}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Additional Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["System Design", "Performance Optimization", "Linux", "Shell Scripting", "Agile Methodology", "Code Reviews"].map((skill) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all border border-gray-200 dark:border-gray-700"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: ["System Design", "Performance Optimization", "Linux", "Shell Scripting", "Agile Methodology", "Code Reviews"].indexOf(skill) * 0.1 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}