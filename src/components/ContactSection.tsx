import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: '#', color: 'from-blue-400 to-blue-600' },
    { name: 'Dribbble', icon: '🏀', url: '#', color: 'from-pink-400 to-pink-600' },
    { name: 'Behance', icon: '🎨', url: '#', color: 'from-blue-500 to-purple-600' },
    { name: 'Instagram', icon: '📸', url: '#', color: 'from-purple-400 to-pink-500' }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-[#0B0B0B] to-[#121212] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-20 w-96 h-96 bg-gradient-to-br from-cyan-500/15 to-violet-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-20 w-80 h-80 bg-gradient-to-tr from-magenta-500/15 to-cyan-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1.2, 0.8, 1.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-200 to-magenta-200 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's start the conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Friendly Icon Above Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <motion.div
                className="relative"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-violet-400/20 to-magenta-400/20 backdrop-blur-md border border-white/20 flex items-center justify-center relative overflow-hidden">
                  {/* Animated background glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-violet-500/30 rounded-3xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3] 
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                  <motion.span 
                    className="text-4xl relative z-10"
                    animate={{ 
                      scale: [1, 1.1, 1] 
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    👋
                  </motion.span>
                </div>
                
                {/* Floating particles around the icon */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full"
                    style={{
                      top: `${20 + Math.cos(i * 60 * Math.PI / 180) * 40}px`,
                      left: `${20 + Math.sin(i * 60 * Math.PI / 180) * 40}px`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            <Card className="group relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 p-8">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-violet-500/5 to-magenta-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-xl">✉️</span>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Send a Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <Label htmlFor="name" className="text-gray-300 mb-2 block">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300"
                      placeholder="Enter your full name"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Label htmlFor="email" className="text-gray-300 mb-2 block">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Label htmlFor="message" className="text-gray-300 mb-2 block">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or what you'd like to discuss..."
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Button
                      type="submit"
                      className="w-full group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 text-white py-4 rounded-xl transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/25"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <motion.span
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          🚀
                        </motion.span>
                        Send Message
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Button>
                  </motion.div>
                </form>
              </div>
            </Card>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <Card className="group relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 hover:border-magenta-400/30 transition-all duration-700 hover:shadow-2xl hover:shadow-magenta-500/20 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-magenta-500/5 via-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-magenta-400 to-cyan-500 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-xl">📍</span>
                  </motion.div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Get in Touch
                  </h3>
                </div>

                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400">📧</span>
                    <span>suraj.kumar@email.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-violet-400">📱</span>
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-magenta-400">🌏</span>
                    <span>Available worldwide (Remote)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400">⏰</span>
                    <span>Response time: 2-4 hours</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="group relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 hover:border-violet-400/30 transition-all duration-700 hover:shadow-2xl hover:shadow-violet-500/20 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-cyan-500/5 to-magenta-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-400 to-magenta-500 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-xl">🌐</span>
                  </motion.div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Follow My Work
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group/social relative overflow-hidden bg-gradient-to-br ${social.color} p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-current/25 text-center`}
                    >
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/social:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                        <span className="text-2xl block mb-2">{social.icon}</span>
                        <span className="text-white text-sm font-semibold">{social.name}</span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </Card>

            {/* Quick response note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-white/10"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl mb-2"
              >
                ⚡
              </motion.div>
              <p className="text-gray-300 text-sm">
                I typically respond within 2-4 hours during business days
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}