// src/components/Experience.jsx
import { motion } from 'framer-motion';

export default function Experience() {
  const jobs = [
    {
      role: "Senior Java Developer",
      company: "GE Healthcare",
      period: "Aug 2024 – Present",
      location: "Bengaluru, India",
      type: "Full-time",
      details: [
        "Developed scalable microservices architecture using Spring Boot, Docker & Kubernetes for healthcare imaging solutions",
        "Integrated CAD-based imaging systems into Edison HealthLink platform, improving diagnostic workflows by 40%",
        "Implemented multithreading optimization for image processing, reducing processing time from 45s to 12s",
        "Established BDD testing framework with Cucumber & Mockito, achieving 85% test coverage"
      ],
      technologies: ["Spring Boot", "Docker", "Kubernetes", "Microservices", "Java 17", "Cucumber"],
      color: "from-blue-500 to-indigo-600",
      icon: "🏥"
    },
    {
      role: "Software Engineer",
      company: "6D Technologies",
      period: "Jun 2021 – Aug 2024",
      location: "Bengaluru, India",
      type: "Full-time • Vodafone Idea Project",
      details: [
        "Built and optimized high-performance backend services supporting 10M+ active subscribers",
        "Improved system performance by 60% through advanced SQL query optimization and Redis caching implementation",
        "Enhanced API security architecture using Spring Security & JWT, reducing security vulnerabilities by 90%",
        "Automated CI/CD deployment pipelines with Jenkins, reducing deployment time from 2 hours to 15 minutes"
      ],
      technologies: ["Java 11", "Spring Security", "Redis", "Jenkins", "MySQL", "AWS"],
      color: "from-purple-500 to-pink-600",
      icon: "📱"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="experience" className="max-w-7xl mx-auto py-16 sm:py-20 px-4 sm:px-6">
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
          Professional Experience
        </motion.h2>
        
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
          variants={cardVariants}
        >
          Building scalable solutions and driving innovation in enterprise environments
        </motion.p>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800"></div>
          
          <div className="space-y-8 lg:space-y-12">
            {jobs.map((job, idx) => (
              <motion.div
                key={idx}
                className="relative group"
                variants={cardVariants}
              >
                {/* Timeline Node */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                
                <div className={`lg:flex lg:items-center ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2 lg:px-8">
                    <motion.div
                      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100 dark:border-gray-700"
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl" role="img" aria-label={job.company}>
                              {job.icon}
                            </span>
                            <div>
                              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200">
                                {job.role}
                              </h3>
                              <h4 className="text-lg text-indigo-600 dark:text-indigo-400 font-semibold">
                                {job.company}
                              </h4>
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                            <span className="flex items-center gap-1">
                              📅 {job.period}
                            </span>
                            <span className="flex items-center gap-1">
                              📍 {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              💼 {job.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-sm uppercase tracking-wide">
                          Key Achievements
                        </h5>
                        <ul className="space-y-3">
                          {job.details.map((detail, i) => (
                            <motion.li 
                              key={i}
                              className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.2 + i * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm sm:text-base leading-relaxed">{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-sm uppercase tracking-wide">
                          Technologies Used
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium hover:scale-105 transition-transform"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  <div className="hidden lg:block lg:w-1/2"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}