import { motion } from 'motion/react';
import { Button } from './ui/button';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B0B0B] via-[#121212] to-[#0B0B0B]">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-magenta-500/20 to-violet-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400/10 to-magenta-400/10 rounded-full blur-2xl"
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-white via-cyan-200 to-violet-200 bg-clip-text text-transparent mb-6"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Designs That Speak.
          </motion.h1>
          
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-magenta-400 bg-clip-text text-transparent mb-8"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experiences That Last.
          </motion.h2>
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I craft digital experiences — from mobile apps and websites to logos, posters, and Banners.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-3xl mx-auto w-full px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            onClick={() => scrollToSection('projects')}
            className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 text-white px-12 py-6 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 w-full sm:w-[260px] text-lg font-medium"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore My Work
              <motion.span
                className="inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Button>

          <Button
            onClick={() => scrollToSection('booking')}
            className="group relative overflow-hidden backdrop-blur-md bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-cyan-400/50 px-12 py-6 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-magenta-500/25 w-full sm:w-[260px] text-lg font-medium"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book a Slot
              <motion.span
                className="inline-block"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                ✨
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-magenta-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-violet-400 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}