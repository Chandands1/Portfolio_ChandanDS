// src/components/Experience.jsx
import { motion } from 'framer-motion';

export default function Experience() {
  const jobs = [
    {
      role: "Senior Java Developer",
      company: "GE Healthcare",
      period: "Aug 2024 – Present",
      details: [
        "Developed scalable microservices with Spring Boot, Docker & Kubernetes",
        "Integrated CAD-based imaging into Edison HealthLink for better workflows",
        "Applied multithreading for faster image processing",
        "Implemented BDD testing with Cucumber & Mockito"
      ],
      technologies: ["Spring Boot", "Docker", "Kubernetes", "Microservices"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      role: "Software Engineer",
      company: "6D Technologies (Vodafone Idea Project)",
      period: "Jun 2021 – Aug 2024",
      details: [
        "Built and optimized backend services for 10M+ subscribers",
        "Improved performance with SQL tuning and Redis caching",
        "Strengthened API security with Spring Security & JWT",
        "Automated deployment with Jenkins CI/CD pipelines"
      ],
      technologies: ["Java", "Spring Security", "Redis", "Jenkins"],
      color: "from-purple-500 to-pink-600"
    },
  ];

  return (
    <section id="experience" className="max-w-6xl mx-auto py-20 px-6">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Professional Experience
      </motion.h2>
      
      <div className="space-y-12">
        {jobs.map((job, idx) => (
          <motion.div
            key={idx}
            className="group relative"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-8 md:p-12 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    {job.role}
                  </h3>
                  <h4 className="text-xl text-indigo-600 font-semibold mb-2">{job.company}</h4>
                  <p className="text-gray-500 font-medium">{job.period}</p>
                </div>
                <div className={`mt-4 md:mt-0 inline-flex p-4 rounded-2xl bg-gradient-to-r ${job.color}`}>
                  <div className="w-8 h-8 bg-white rounded-lg opacity-90"></div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h5 className="font-semibold text-gray-800 mb-4">Key Achievements:</h5>
                  <ul className="space-y-3">
                    {job.details.map((detail, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-start gap-3 text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.2 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-4">Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}