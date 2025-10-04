import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-t from-[#0B0B0B] to-[#121212] py-16 px-6 overflow-hidden">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-1/4 w-48 h-48 bg-gradient-to-l from-magenta-500/5 to-cyan-500/5 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.blockquote 
            className="text-2xl md:text-3xl font-medium text-transparent bg-gradient-to-r from-cyan-200 via-violet-200 to-magenta-200 bg-clip-text mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            "Design is the art of empathy made visible."
          </motion.blockquote>
          <motion.p 
            className="text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            — Suraj Kumar
          </motion.p>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <motion.h3 
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              whileHover={{ scale: 1.05 }}
            >
              Suraj Kumar
            </motion.h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              UX/UI Designer crafting digital experiences that inspire and connect. 
              Based in India, working globally with passionate teams and creative minds.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🌟
              </motion.span>
              <span>Available for new projects</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Book a Call', href: '#booking' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <motion.li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Let's Connect</h4>
            <div className="space-y-3">
              <motion.a
                href="mailto:suraj.kumar@email.com"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                whileHover={{ x: 5 }}
              >
                <span className="text-cyan-400">📧</span>
                suraj.kumar@email.com
              </motion.a>
              <motion.div
                className="flex items-center gap-3 text-gray-400 text-sm"
                whileHover={{ x: 5 }}
              >
                <span className="text-violet-400">📱</span>
                +91 98765 43210
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-gray-400 text-sm"
                whileHover={{ x: 5 }}
              >
                <span className="text-magenta-400">🌍</span>
                Remote • Worldwide
              </motion.div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: '💼', color: 'hover:text-blue-400' },
                { icon: '🏀', color: 'hover:text-pink-400' },
                { icon: '🎨', color: 'hover:text-purple-400' },
                { icon: '📸', color: 'hover:text-yellow-400' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/10 hover:border-white/20`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Suraj Kumar. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <motion.a
                href="#"
                className="hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-violet-400 transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
              <motion.div
                className="flex items-center gap-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Available for work</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Floating back to top */}
        <motion.button
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 flex items-center justify-center text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 z-50"
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <span className="text-xl">⬆️</span>
        </motion.button>
      </div>
    </footer>
  );
}