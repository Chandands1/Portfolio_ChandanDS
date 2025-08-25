import { motion, useReducedMotion } from 'framer-motion';

// Reusable EducationCard component
function EducationCard({ degree, institution, description, color, icon }) {
  return (
    <motion.div
      className="group relative"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: useReducedMotion() ? 0 : 0.6 } }
      }}
      whileHover={{ y: -8 }}
      transition={{ duration: useReducedMotion() ? 0 : 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
      <div className="relative p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
        <div className="flex items-start gap-4 mb-6">
          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${color} shadow-lg`}>
            <span className="text-2xl" role="img" aria-label={`${degree} icon`}>
              {icon}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
              {degree}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              {institution}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  const shouldReduceMotion = useReducedMotion();

  const educationHistory = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "PES College of Engineering, Mandya",
      description: "",
      color: "from-blue-500 to-indigo-600",
      icon: "🎓"
    },
    {
      degree: "AWS Certified Solutions Architect – Associate",
      institution: "Amazon Web Services",
      description: "Validates your cloud architecture, deployment, and scaling knowledge, which matches your AWS + Kubernetes + Docker experience. Highly demanded in enterprise and healthcare/telecom domains where you’ve worked. Boosts credibility for cloud-native and microservices projects.",
      color: "from-purple-500 to-pink-600",
      icon: "📜"
    },
    {
      degree: "Oracle Certified Professional (OCP) Java SE 11/17 Developer",
      institution: "Oracle",
      description: "Demonstrates deep Java expertise, beyond just hands-on work. Since your resume highlights Core Java (8–17), Multithreading, Concurrency, this certification strengthens your positioning as a Senior Java Developer / Backend Specialist. Recognized worldwide and valued in hiring.",
      color: "from-green-500 to-teal-600",
      icon: "📜"
    },
    {
      degree: "Kubernetes Certified Application Developer (CKAD)",
      institution: "Cloud Native Computing Foundation",
      description: "Focuses on containerized application design, deployment, and scalability. Perfect complement to your Docker + Kubernetes experience. Signals to employers that you can handle modern cloud-native and microservices architectures at scale.",
      color: "from-orange-500 to-red-600",
      icon: "📜"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.2
      }
    }
  };

  return (
    <section
      id="education"
      className="bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950 py-16 sm:py-20"
      aria-labelledby="education-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            id="education-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0 : 0.6 } }
            }}
          >
            Education & Qualifications
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0 : 0.6 } }
            }}
          >
            A strong foundation in computer science and continuous learning through certifications
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {educationHistory.map((edu, index) => (
              <EducationCard
                key={edu.degree}
                degree={edu.degree}
                institution={edu.institution}
                description={edu.description}
                color={edu.color}
                icon={edu.icon}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}