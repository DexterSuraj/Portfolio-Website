import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';

export default function BookingSection() {
  return (
    <section id="booking" className="py-24 px-6 bg-gradient-to-b from-[#121212] to-[#0B0B0B] relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
        
        <motion.div
          className="absolute top-1/2 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-magenta-500/10 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-l from-violet-500/10 to-cyan-500/10 rounded-full blur-2xl"
          animate={{
            rotate: [360, 0],
            scale: [1.2, 0.8, 1.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-violet-200 to-magenta-200 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Let's Connect Beyond Pixels
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project, career questions, or creative ideas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="group relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 hover:border-magenta-400/30 transition-all duration-700 hover:shadow-2xl hover:shadow-magenta-500/20 transform hover:scale-[1.02] p-8 md:p-12">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-magenta-500/5 via-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 text-center">
              {/* Icon */}
              <motion.div
                className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-magenta-400 to-cyan-500 flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-4xl">🚀</span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Book a Design Consultation
              </h3>
              
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Whether you need help with UI/UX design, branding, or just want to chat about the creative industry, 
                I'm here to help. Book a slot and let's turn your ideas into reality.
              </p>

              {/* Service highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Design Strategy</h4>
                  <p className="text-gray-400 text-sm">Strategic design thinking and planning</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-violet-400/20 to-magenta-400/20 flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Creative Direction</h4>
                  <p className="text-gray-400 text-sm">Visual identity and branding guidance</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-magenta-400/20 to-cyan-400/20 flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Career Mentoring</h4>
                  <p className="text-gray-400 text-sm">Design career advice and portfolio reviews</p>
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="group relative overflow-hidden bg-gradient-to-r from-magenta-500 to-cyan-500 hover:from-magenta-400 hover:to-cyan-400 text-white px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-magenta-500/25">
                  <span className="relative z-10 flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      📅
                    </motion.span>
                    Book a Free Consultation
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-magenta-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Button>

                <Button className="group relative overflow-hidden backdrop-blur-md bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-cyan-400/50 px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                  <span className="relative z-10 flex items-center gap-2">
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      💬
                    </motion.span>
                    Quick Chat
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Button>
              </div>

              {/* Calendly embed placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <p className="text-gray-400 text-sm mb-4">
                  ⚡ Quick booking available • Usually responds within 2 hours
                </p>
                <div className="h-40 rounded-xl bg-gradient-to-br from-violet-500/10 to-cyan-500/10 flex items-center justify-center">
                  <p className="text-gray-400">
                    📅 Calendly widget will be embedded here
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-magenta-400/0 via-violet-400/0 to-cyan-400/0 group-hover:from-magenta-400/20 group-hover:via-violet-400/20 group-hover:to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
          </Card>
        </motion.div>
      </div>
    </section>
  );
}