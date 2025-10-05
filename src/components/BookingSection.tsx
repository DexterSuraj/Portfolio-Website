import { motion } from 'framer-motion';
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

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-violet-200 to-magenta-200 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Design Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect consultation package that matches your needs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            {/* UX/UI Design Consultation */}
            <Card className="group relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:scale-[1.02] p-8 flex flex-col min-h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 flex flex-col flex-1">
                <div>
                  <motion.div
                  className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-2xl">�</span>
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4">UX/UI Design</h3>
                <p className="text-gray-400 mb-4">1-hour deep dive into your digital product design needs</p>
                <ul className="text-gray-300 space-y-2 mb-8">
                  <li>• User Interface Analysis</li>
                  <li>• Wireframe Review</li>
                  <li>• Interactive Prototyping</li>
                </ul>
              </div>
              <div className="mt-auto">
                <p className="text-xl font-bold text-white mb-4">$150/hour</p>
                <Button className="w-full px-8 py-6 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 transition-all duration-300 text-white font-medium tracking-wide hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25">
                  Book Consultation
                </Button>
              </div>
            </div>
          </Card>

          {/* Brand Strategy Session */}
          <Card className="group relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:scale-[1.02] p-8 flex flex-col min-h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 flex flex-col flex-1">
              <div>
                <motion.div
                  className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-2xl">🎨</span>
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4">Brand Strategy</h3>
                <p className="text-gray-400 mb-4">Comprehensive brand identity consultation</p>
                <ul className="text-gray-300 space-y-2 mb-8">
                  <li>• Visual Identity Design</li>
                  <li>• Brand Guidelines</li>
                  <li>• Market Positioning</li>
                </ul>
              </div>
              <div className="mt-auto">
                <p className="text-xl font-bold text-white mb-4">$200/hour</p>
                <Button className="w-full px-8 py-6 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 transition-all duration-300 text-white font-medium tracking-wide hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25">
                  Book Strategy Session
                </Button>
              </div>
            </div>
          </Card>

          {/* Portfolio Review */}
          <Card className="group relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:scale-[1.02] p-8 flex flex-col min-h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 flex flex-col flex-1">
              <div>
                <motion.div
                  className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-2xl">📝</span>
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4">Portfolio Review</h3>
                <p className="text-gray-400 mb-4">Expert feedback on your design portfolio</p>
                <ul className="text-gray-300 space-y-2 mb-8">
                  <li>• Project Presentation</li>
                  <li>• Case Study Structure</li>
                  <li>• Career Direction</li>
                </ul>
              </div>
              <div className="mt-auto">
                <p className="text-xl font-bold text-white mb-4">$100/hour</p>
                <Button className="w-full px-8 py-6 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 transition-all duration-300 text-white font-medium tracking-wide hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25">
                  Book Review
                </Button>
              </div>
            </div>
          </Card>

          {/* Quick Design Sprint */}
          <Card className="group relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:scale-[1.02] p-8 flex flex-col min-h-[500px] md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 flex flex-col flex-1">
              <div>
                <motion.div
                  className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-2xl">⚡</span>
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4">Design Sprint</h3>
                <p className="text-gray-400 mb-4">Rapid ideation and problem-solving session</p>
                <ul className="text-gray-300 space-y-2 mb-8">
                  <li>• Quick Problem Solving</li>
                  <li>• Concept Sketching</li>
                  <li>• Rapid Prototyping</li>
                </ul>
              </div>
              <div className="mt-auto">
                <p className="text-xl font-bold text-white mb-4">$180/hour</p>
                <Button className="w-full px-8 py-6 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 transition-all duration-300 text-white font-medium tracking-wide hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25">
                  Book Sprint
                </Button>
              </div>
            </div>
          </Card>

            {/* Mentorship Program */}
            <Card className="group relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 hover:border-violet-400/30 transition-all duration-700 hover:shadow-2xl hover:shadow-violet-500/20 transform hover:scale-[1.02] p-8 md:col-span-2 lg:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-magenta-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 flex flex-col md:flex-row gap-8">
                <div className="md:flex-1">
                  <motion.div
                    className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-violet-400/20 via-magenta-400/20 to-cyan-400/20 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-2xl">🌟</span>
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4">Design Mentorship Program</h3>
                  <p className="text-gray-400 mb-4">Long-term guidance and skill development</p>
                  <ul className="text-gray-300 space-y-2 mb-6">
                    <li>• Monthly 1-on-1 Sessions</li>
                    <li>• Project Guidance</li>
                    <li>• Career Development</li>
                    <li>• Industry Networking</li>
                  </ul>
                </div>
                <div className="md:flex-1 flex flex-col justify-center">
                  <p className="text-xl font-bold text-white mb-6">$500/month</p>
                  <Button className="w-full px-8 py-6 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 transition-all duration-300 text-white font-medium tracking-wide hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25">
                    Join Mentorship
                  </Button>
                  <p className="text-gray-400 text-sm mt-4">3-month minimum commitment</p>
                </div>
              </div>
            </Card>
        </motion.div>
      </div>
    </section>
  );
}