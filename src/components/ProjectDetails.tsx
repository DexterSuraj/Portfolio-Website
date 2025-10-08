import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import freshFoldImg from "../assets/FreshFold.svg"
import Zrent from "../assets/Zrent.svg"
import poster from "../assets/Lemonade Design.svg"
import mobile from "../assets/mobile Ui.svg"
// Project data
const projectsData = {
  'ux-case-study': {
    title: 'UX Case Study',
    description: 'An in-depth analysis of user experience design challenges and solutions',
    fullDescription: `A comprehensive case study examining user experience challenges and innovative solutions. 
    This project demonstrates the complete UX design process from initial research to final implementation.`,
    tags: ['UX Design', 'User Research', 'Prototyping', 'Usability Testing'],
    challenges: [
      'Understanding complex user needs across different demographics',
      'Balancing aesthetic design with functionality',
      'Implementing responsive design solutions',
      'Optimizing user flows for better conversion'
    ],
    solutions: [
      'Conducted extensive user research with diverse focus groups',
      'Created interactive prototypes for user testing',
      'Implemented data-driven design decisions',
      'Developed a comprehensive design system'
    ],
    results: [
      '35% increase in user engagement',
      '45% reduction in user error rates',
      '60% improvement in task completion time',
      'Positive user feedback and satisfaction scores'
    ],
    imageUrl: freshFoldImg,
  },
  'brand-identity': {
    title: 'Brand Identity Project',
    description: 'Complete brand transformation and visual identity design',
    fullDescription: `A strategic brand identity project that involved creating a cohesive visual language and brand 
    strategy for a growing technology company. The project encompassed everything from logo design to complete brand guidelines.`,
    tags: ['Branding', 'Visual Design', 'Logo Design', 'Brand Strategy'],
    challenges: [
      'Creating a unique visual identity in a crowded market',
      'Maintaining brand consistency across platforms',
      'Developing flexible design systems',
      'Meeting tight project deadlines'
    ],
    solutions: [
      'Developed comprehensive brand guidelines',
      'Created versatile logo variations',
      'Designed modular component system',
      'Implemented brand management tools'
    ],
    results: [
      'Brand recognition increased by 40%',
      'Marketing efficiency improved by 50%',
      'Consistent brand presence achieved',
      'Client satisfaction rating of 9.5/10'
    ],
    imageUrl: Zrent,
  },


'graphics-poster': {
    title: 'Graphics-Poster Project',
    description: 'Complete brand transformation and visual identity design',
    fullDescription: `A strategic brand identity project that involved creating a cohesive visual language and brand 
    strategy for a growing technology company. The project encompassed everything from logo design to complete brand guidelines.`,
    tags: ['Branding', 'Visual Design', 'Logo Design', 'Brand Strategy'],
    challenges: [
      'Creating a unique visual identity in a crowded market',
      'Maintaining brand consistency across platforms',
      'Developing flexible design systems',
      'Meeting tight project deadlines'
    ],
    solutions: [
      'Developed comprehensive brand guidelines',
      'Created versatile logo variations',
      'Designed modular component system',
      'Implemented brand management tools'
    ],
    results: [
      'Brand recognition increased by 40%',
      'Marketing efficiency improved by 50%',
      'Consistent brand presence achieved',
      'Client satisfaction rating of 9.5/10'
    ],
    imageUrl: poster,
  },



  'mobile-app': {
    title: 'Mobile App Design',
    description: 'User-centered mobile application design and development',
    fullDescription: `A mobile application design project focused on creating an intuitive and engaging user experience. 
    The project included full UI/UX design, prototyping, and collaboration with development team.`,
    tags: ['Mobile Design', 'UI/UX', 'iOS', 'Android'],
    challenges: [
      'Designing for multiple device sizes and platforms',
      'Optimizing performance and usability',
      'Creating intuitive navigation patterns',
      'Ensuring accessibility compliance'
    ],
    solutions: [
      'Implemented responsive design principles',
      'Created platform-specific design variations',
      'Developed custom UI components',
      'Conducted extensive usability testing'
    ],
    results: [
      'App store rating of 4.8/5',
      'User retention increased by 55%',
      '30% faster task completion rate',
      'Accessibility score of 98/100'
    ],
    imageUrl: mobile,
  }
};

export default function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectsData[projectId as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-400">Project not found</h1>
      </div>
    );
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#121212] to-[#0B0B0B] min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </motion.button>

        {/* Project Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-violet-200 to-magenta-200 bg-clip-text text-transparent mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {project.description}
          </p>
        </div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16 rounded-xl overflow-hidden bg-black/50 backdrop-blur-sm border border-gray-800 w-fit max-w-full mx-auto"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Project Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p className="text-gray-400 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Challenges</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start text-gray-400">
                    <span className="text-violet-500 mr-2">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Solutions</h2>
              <ul className="space-y-3">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start text-gray-400">
                    <span className="text-violet-500 mr-2">•</span>
                    {solution}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Results</h2>
              <ul className="space-y-3">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start text-gray-400">
                    <span className="text-violet-500 mr-2">•</span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Technologies & Skills</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full text-sm bg-violet-500/10 text-violet-300 border border-violet-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}