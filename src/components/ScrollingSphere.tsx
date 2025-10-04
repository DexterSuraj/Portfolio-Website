import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

export default function ScrollingSphere() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll();

  // Track window size for responsive positioning
  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Transform scroll progress into different movements
  const x = useTransform(scrollYProgress, [0, 1], [windowSize.width * 0.1, windowSize.width * 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [
    windowSize.height * 0.2, 
    windowSize.height * 0.7, 
    windowSize.height * 0.3, 
    windowSize.height * 0.8
  ]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.3, 0.8, 0.8, 0.2]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {/* Main Glowing Sphere */}
      <motion.div
        style={{ x, y, rotate, scale, opacity }}
        className="absolute w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
      >
        {/* Outer Glow Ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-violet-400/30 to-magenta-400/20 blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Middle Glow */}
        <motion.div
          className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-300/30 via-violet-300/40 to-magenta-300/30 blur-2xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            rotate: [360, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Glass Sphere Core */}
        <motion.div
          className="absolute inset-8 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl"
          animate={{
            rotate: [0, -360],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Inner Gradient Reflection */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-400/20 via-transparent to-violet-400/20" />
          
          {/* Glass Highlight */}
          <motion.div
            className="absolute top-2 left-2 w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full bg-white/30 blur-sm"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Inner Core Glow */}
          <motion.div
            className="absolute inset-6 rounded-full bg-gradient-to-r from-cyan-500/40 to-violet-500/40 blur-md"
            animate={{
              opacity: [0.4, 0.8, 0.4],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Floating Particle Effects */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
            style={{
              top: `${20 + i * 15}%`,
              left: `${15 + i * 12}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      {/* Additional Ambient Glow Effects */}
      <motion.div
        style={{ 
          x: useTransform(scrollYProgress, [0, 1], [windowSize.width * 0.6, windowSize.width * 0.2]),
          y: useTransform(scrollYProgress, [0, 1], [windowSize.height * 0.8, windowSize.height * 0.1]),
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.1, 0.3, 0.3, 0.1])
        }}
        className="absolute w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96"
      >
        <motion.div
          className="w-full h-full rounded-full bg-gradient-to-r from-magenta-500/10 via-violet-500/15 to-cyan-500/10 blur-3xl"
          animate={{
            scale: [0.8, 1.3, 0.8],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Secondary Sphere */}
      <motion.div
        style={{ 
          x: useTransform(scrollYProgress, [0, 1], [windowSize.width * 0.8, windowSize.width * 0.1]),
          y: useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [
            windowSize.height * 0.6, 
            windowSize.height * 0.2, 
            windowSize.height * 0.7, 
            windowSize.height * 0.3
          ]),
          opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 0.5, 0.5, 0.1]),
          scale: useTransform(scrollYProgress, [0, 1], [0.6, 1])
        }}
        className="absolute w-20 h-20 md:w-32 md:h-32"
      >
        <motion.div
          className="w-full h-full rounded-full backdrop-blur-sm bg-white/3 border border-white/5"
          animate={{
            rotate: [360, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-violet-400/20 to-cyan-400/20 blur-sm" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}