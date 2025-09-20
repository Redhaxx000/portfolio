import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="min-h-screen relative overflow-hidden py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-gray-900" />
      
      {/* Animated background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px', '0px 0px']
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-5xl md:text-7xl mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              ABOUT
            </motion.h2>
            
            <motion.div 
              className="space-y-6 text-gray-300"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <p className="text-xl leading-relaxed">
                I'm a creative professional passionate about crafting digital experiences 
                that push the boundaries of what's possible.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-400">
                With a keen eye for detail and a love for minimalist design, 
                I specialize in creating clean, impactful solutions that tell compelling stories.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-400">
                Every project is an opportunity to blend artistry with functionality, 
                creating experiences that resonate on both emotional and practical levels.
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-8 flex flex-wrap gap-4"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {['Design', 'Development', 'Strategy', 'Innovation'].map((skill, index) => (
                <motion.span 
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right column - Visual element */}
          <motion.div 
            className="relative"
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative aspect-square">
              {/* Animated circles */}
              <motion.div 
                className="absolute inset-0 border border-white/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-8 border border-white/10 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-16 border border-white/5 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Center element */}
              <motion.div 
                className="absolute inset-20 bg-gradient-to-br from-white/20 to-white/5 rounded-full backdrop-blur-sm flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-8 h-8 bg-white rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}