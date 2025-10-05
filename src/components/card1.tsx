            import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Button } from './ui/button';

export default function UXUIDesignCard() {
  return (
    <Card className="group relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:scale-[1.02] p-8 flex flex-col min-h-[500px]">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative z-10 flex flex-col flex-1">
        <div>
          <motion.div
            className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 flex items-center justify-center"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-2xl">💻</span>
          </motion.div>
          <h3 className="text-xl font-bold text-white mb-4">UX/UI Design</h3>
          <p className="text-gray-400 mb-4">1-hour deep dive into your digital product design needs</p>
          <ul className="text-gray-300 space-y-2 mb-8">
            <li>• User Interface Analysis</li>
            <li>• Wireframe Review</li>
            <li>• Interactive Prototyping</li>
          </ul>
        </div>
        <div className="mt-auto flex flex-col justify-end">
          <p className="text-xl font-bold text-white mb-4">$150/hour</p>
          <Button className="w-full px-8 py-6 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 transition-all duration-300 text-white font-medium tracking-wide hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25">
            Book Consultation
          </Button>
        </div>
      </div>
    </Card>
  );
}