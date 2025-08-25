import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { name: "Email", href: "mailto:chandands.in@gmail.com", icon: "📧" },
    { name: "LinkedIn", href: "https://linkedin.com/in/chandan-d-s-281a89320", icon: "💼" },
    { name: "Mobile", href: "tel:9113831475", icon: "📱" }
  ];

  return (
    <footer id="footer" className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h3>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's build something amazing together.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" && link.name !== "Mobile" ? "_blank" : undefined}
                className="group relative p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-2xl">{link.icon}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {link.name}
                </div>
              </motion.a>
            ))}
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Chandan D S. Crafted with passion and precision.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}