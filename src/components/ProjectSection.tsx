import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';

export default function ProjectSection() {
  const projects = [
    {
      id: 4,
      slug: 'ux-case-study',
      title: "UX Case Study",
      category: "User Research",
      description: "Comprehensive UX research and design process documentation",
      image: "https://images.unsplash.com/photo-1674509780304-b51c5e2f9dbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMHJlc2VhcmNoJTIwdXNlciUyMGV4cGVyaWVuY2V8ZW58MXx8fHwxNzU5NjE2NjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Research", "Wireframing", "Testing"],
      gradient: "from-cyan-500/20 to-magenta-500/20",
      hoverGradient: "from-cyan-500/30 to-magenta-500/30"
    },
    {
      id: 2,
      slug: 'brand-identity',
      title: "Brand Identity",
      category: "Logo Design",
      description: "Complete branding package with logo design and visual identity system",
      image: "https://images.unsplash.com/photo-1594926959777-345e30644273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGxvZ28lMjBkZXNpZ24lMjBicmFuZGluZ3xlbnwxfHx8fDE3NTk2MTY2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Illustrator", "Branding", "Typography"],
      gradient: "from-magenta-500/20 to-cyan-500/20",
      hoverGradient: "from-magenta-500/30 to-cyan-500/30"
    },
    {
      id: 3,
      title: "Graphic Posters",
      category: "Graphic Design",
      description: "Creative poster designs with bold typography and striking visual elements",
      image: "https://images.unsplash.com/photo-1664574969189-a618ab253940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyJTIwY29sb3JmdWx8ZW58MXx8fHwxNzU5NjE2NjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Photoshop", "Layout", "Print Design"],
      gradient: "from-violet-500/20 to-magenta-500/20",
      hoverGradient: "from-violet-500/30 to-magenta-500/30"
    },
    {
      id: 1,
      slug: 'mobile-app',
      title: "Mobile App UI",
      category: "UI/UX Design",
      description: "Modern mobile app interface with intuitive navigation and clean aesthetics",
      image: "https://images.unsplash.com/photo-1551650992-ee4fd47df41f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU5NjE2NjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Figma", "Prototyping", "User Research"],
      gradient: "from-cyan-500/20 to-violet-500/20",
      hoverGradient: "from-cyan-500/30 to-violet-500/30"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-[#0B0B0B] to-[#121212] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-magenta-500/10 to-violet-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 150, 0],
            y: [0, -100, 0],
            scale: [1, 1.4, 1],
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
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-magenta-200 to-cyan-200 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            My Work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A curated selection of projects showcasing design thinking and creative solutions
          </p>
        </motion.div>

        {/* Bento Grid for Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className={`${index === 0 ? 'lg:col-span-2 lg:row-span-2' : index === 3 ? 'lg:col-span-2' : ''}`}
            >
              <Link to={`/project/${project.slug}`} className="block h-full">
                <Card className="group relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:scale-[1.02] h-full">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                {/* Image */}
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                      index === 0 ? 'h-[720px]' : 'h-48'
                    }`}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Hover content */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-center">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 mx-auto"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-2xl">👁️</span>
                      </motion.div>
                      <p className="text-white font-semibold">View Project</p>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-300 border-cyan-500/30">
                      {project.category}
                    </Badge>
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-white/5 backdrop-blur-sm rounded-md text-gray-300 border border-white/10 group-hover:border-cyan-400/30 group-hover:text-cyan-300 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/0 via-violet-400/0 to-magenta-400/0 group-hover:from-cyan-400/20 group-hover:via-violet-400/20 group-hover:to-magenta-400/20 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      </div>
    </section>
  );
}