import { motion } from 'motion/react';
import { Card } from './ui/card';

export default function AboutSection() {
  const skills = [
    'Figma', 'React', 'Adobe XD', 'Photoshop', 'Illustrator', 'Framer', 
    'Sketch', 'After Effects', 'Principle', 'InVision', 'Webflow', 'Typography'
  ];

  const journeyItems = [{
    year: '2021 (October)', 
      title: 'Started My Graduation(BCA)', 
      desc: 'Self-taught basics through online courses and design challenges',
      details: 'Discovered my passion for design while exploring creative tools like Photoshop and Illustrator. Started with logo design and basic graphics.'
  },
    { 
      year: '2024 (July)', 
      title: 'Started Design Journey', 
      desc: 'Self-taught basics through online courses and design challenges',
      details: 'Discovered my passion for design while exploring creative tools like Photoshop and Illustrator. Started with logo design and basic graphics.'
    },
    { 
      year: '2024 (December)', 
      title: 'Joined First MNC', 
      desc: 'I Joined TCS and Learned Coding and Designing.',
      details: 'Began taking on client projects, focusing on brand identity and simple website designs. Learned the importance of client communication and project management.'
    },
    { 
      year: '2025 (Present)', 
      title: 'Crafting Seanmless Experience', 
      desc: 'Advanced user research, prototyping, and design systems',
      details: 'Deepened my understanding of user-centered design principles. Mastered tools like Figma and started creating comprehensive design systems and interactive prototypes.'
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-[#121212] to-[#0B0B0B] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
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
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-200 to-violet-200 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate about creating digital experiences that connect and inspire
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Profile Card - Large */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-2"
          >
            <Card className="h-full group relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:scale-[1.02] p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-2xl">
                    👨‍💻
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Suraj Kumar
                    </h3>
                    <p className="text-cyan-400 text-lg">UX/UI Designer & Creative Technologist</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  With over 5 years of experience in digital design, I specialize in creating user-centered experiences that bridge the gap between beautiful aesthetics and functional design. My passion lies in understanding user behavior and translating complex problems into elegant, intuitive solutions.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  When I'm not designing, you'll find me exploring photography, sketching urban landscapes, or experimenting with the latest design tools and technologies.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full group relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 hover:border-magenta-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-magenta-500/10 transform hover:scale-[1.02] p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-magenta-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-magenta-400 to-violet-500 flex items-center justify-center">
                    🛠️
                  </div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Skills & Tools
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="px-3 py-1 text-sm bg-white/10 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-violet-500/20 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Photography/Creative Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="h-full group relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:scale-[1.02] p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-magenta-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-magenta-500 flex items-center justify-center">
                    📸
                  </div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Creative Passion
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Beyond digital design, I capture moments through photography and express ideas through traditional sketching and illustration.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-16 rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div className="h-16 rounded-lg bg-gradient-to-br from-magenta-500/20 to-cyan-500/20 flex items-center justify-center">
                    <span className="text-2xl">✏️</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Journey Timeline - Full Width Horizontal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="group relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 hover:border-violet-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10 transform hover:scale-[1.01] p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-magenta-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-400 to-cyan-500 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-2xl">🚀</span>
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    My Design Journey
                  </h3>
                </div>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                  From self-taught beginner to full-stack designer — here's how my passion for creating meaningful digital experiences evolved over the years.
                </p>
              </div>

              {/* Horizontal Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/20 via-violet-500/40 to-magenta-500/20 rounded-full">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-400 via-violet-400 to-magenta-400 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </div>

                {/* Timeline Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {journeyItems.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 * index }}
                      className="relative"
                    >
                      {/* Timeline Node */}
                      <motion.div 
                        className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full border-4 border-[#0B0B0B] shadow-lg z-10"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          boxShadow: [
                            '0 0 0 0 rgba(6, 182, 212, 0.4)',
                            '0 0 0 10px rgba(6, 182, 212, 0)',
                            '0 0 0 0 rgba(6, 182, 212, 0)'
                          ]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                      />

                      {/* Content Card */}
                      <div className="pt-16 pb-6">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-violet-400/30 hover:bg-white/10 transition-all duration-300 h-full">
                          <div className="text-center mb-4">
                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-400 to-violet-400 text-black font-bold text-lg rounded-xl mb-3">
                              {item.year}
                            </span>
                            <h4 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                              {item.title}
                            </h4>
                            <p className="text-cyan-300 text-sm font-medium mb-3">
                              {item.desc}
                            </p>
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {item.details}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}